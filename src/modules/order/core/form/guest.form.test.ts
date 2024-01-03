import { GuestForm } from '@ratatouille/modules/order/core/form/guest.form';
import { OrderingDomainModel } from '@ratatouille/modules/order/core/model/ordering.domain-model';
import { IIDProvider } from '@ratatouille/modules/core/id-provider';
import { GuestFactory } from '@ratatouille/modules/order/core/model/guest.factory';

class StubIdProvider implements IIDProvider {
    generate() {
        return "1";
    }
}

// On hoiste nos states (intéressant pour refactor ensuite)
// Cela n'est possible que si on reste stateless 
// La class GuestForm est donc stateless sauf pour son paramètre IIDProvider qui est stateful mais on ne le changera pas (auto-discipline)
// d'où on peux se permettre de hoister cet objet
const idProvider = new StubIdProvider();
const initialEmptyState: OrderingDomainModel.Form = {    
    guests: [],
    organizerId: null
}

const JohnDoe: OrderingDomainModel.Guest = GuestFactory.create({
    id:"1",
    firstName: 'John',
    lastName: 'Doe',
    age: 24
});

const BrigitteMonin: OrderingDomainModel.Guest = GuestFactory.create({
    id:"2",
    firstName: 'Brigitte',
    lastName: 'Monin',
    age: 24
});

const stateWithOneUser: OrderingDomainModel.Form = {
    guests: [JohnDoe],
    organizerId: null
}
   
const stateWithTwoUsers: OrderingDomainModel.Form = {
    guests: [ JohnDoe, BrigitteMonin ],
    organizerId: null
};

const form = new GuestForm(idProvider);

describe('Add a Guest', () => {
    it('It should add a guest', () => {
        const state = form.addGuest(initialEmptyState);
        expect(state.guests).toEqual(
            [{
                id:"1",
                firstName: 'John',
                lastName: 'Doe',
                age: 24
            }]
        );
    });
    it('It should add a guest when there is already one', () => {
        const state = form.addGuest(stateWithOneUser);
        expect(state.guests).toEqual([JohnDoe, JohnDoe]);
    });

    it('It should add a guest when there is already two', () => {
        const state = form.addGuest(stateWithTwoUsers);
        expect(state.guests).toEqual(
            [JohnDoe, BrigitteMonin,
            {
                id:"1",
                firstName: 'John',
                lastName: 'Doe',
                age: 24
            }]
        );
    });
});

describe('Remove a Guest', () => {
    it('It should not remove anyone when there is an empty state', () => {
        const state = form.removeGuest(initialEmptyState, "1");
        expect(state.guests).toEqual([]);
    });
    it('Should remove user with id 1 when there is only a user with id 1 and it remains no user', () => {
        const state = form.removeGuest(stateWithOneUser, "1");
        expect(state.guests).toEqual([]);
    });
    it('Should remove user with id 2 when there is a user with id 2 and it remain a user with id 1', () => {
        const state = form.removeGuest(stateWithTwoUsers, "2");
        expect(state.guests).toEqual([
            {
                id:"1",
                firstName: 'John',
                lastName: 'Doe',
                age: 24
            }
        ]);
    });

    it('Should set the organizer id to null when the organizer is removed', () => {
        const stateWithOrganizer = {
            ...stateWithOneUser,
            organizerId: "1"
        }
        const state = form.removeGuest(stateWithOrganizer, "1");
        expect(state.organizerId).toEqual(null);
    });
});

describe('Set an organizer', () => {
    it("set the organizer id when the user does not exist", () =>{
        const state = form.changeOrganizer(initialEmptyState, "1")
        expect(state.organizerId).toEqual(null)
    })
    it("set the organizer id when a user exist", () =>{
        const state = form.changeOrganizer(stateWithOneUser, "1")
        expect(state.organizerId).toEqual("1")
    })
});

describe('Set Is Submittable', () => {
    it("When there is no organizer, it can't be submittable", () =>{
        const isSubmitable = form.isSubmitable(initialEmptyState)
        expect(isSubmitable).toEqual(false)
    })
    it("When there is one organizer, it can be submittable", () =>{
        const withOrganizerState = {
            ...stateWithOneUser,
            organizerId: "1"
        }
        const isSubmitable = form.isSubmitable(withOrganizerState)
        expect(isSubmitable).toEqual(true)
    })

    it.each(
        [
            {
                key: "age" as keyof OrderingDomainModel.Guest,
                value: 0 as OrderingDomainModel.Guest["age"]
            },
            {
                key: "firstName" as keyof OrderingDomainModel.Guest,
                value: "" as OrderingDomainModel.Guest["firstName"]
            },
            {
                key: "lastName" as keyof OrderingDomainModel.Guest,
                value: "" as OrderingDomainModel.Guest["lastName"]
            }
        ]
    )(`When %s is empty, it can't be submittable`, ({key, value}) =>{
        const withOrganizerState = {
            ...stateWithOneUser,
            organizerId: "1",
            guests: [{
                ...JohnDoe,
                [key]: value
            }]
        }
        const isSubmitable = form.isSubmitable(withOrganizerState)
        expect(isSubmitable).toEqual(false)
    })
//  ---------- Version avec 3 tests séparés : ancienne version, il est mieux d'utiliser it.each (ci-dessus) ----------
//     it("When age is below 0 or 0, it can't be submittable", () =>{
//         const withOrganizerState = {
//             ...stateWithOneUser,
//             organizerId: "1",
//             guests: [{
//                 ...JohnDoe,
//                 age: -1
//             }]
//         }
//         const isSubmitable = form.isSubmitable(withOrganizerState)
//         expect(isSubmitable).toEqual(false)
//     })

//     it("When firstname is empty, it can't be submittable", () =>{
//         const withOrganizerState = {
//             ...stateWithOneUser,
//             organizerId: "1",
//             guests: [{
//                 ...JohnDoe,
//                 firstName: ""
//             }]
//         }
//         const isSubmitable = form.isSubmitable(withOrganizerState)
//         expect(isSubmitable).toEqual(false)
//     })

//     it("When lastname is empty, it can't be submittable", () =>{
//         const withOrganizerState = {
//             ...stateWithOneUser,
//             organizerId: "1",
//             guests: [{
//                 ...JohnDoe,
//                 lastName: ""
//             }]
//         }
//         const isSubmitable = form.isSubmitable(withOrganizerState)
//         expect(isSubmitable).toEqual(false)
//     })
});

describe('Update a guest', () => {
    it.each(
        [
            {
                key: "firstName" as keyof OrderingDomainModel.Guest,
                value: "Helena" as OrderingDomainModel.Guest["firstName"]
            },
            {
                key: "lastName" as keyof OrderingDomainModel.Guest,
                value: "Gilbert" as OrderingDomainModel.Guest["lastName"]
            },
            {
                key: "age" as keyof OrderingDomainModel.Guest,
                value: 18 as OrderingDomainModel.Guest["age"]
            }
        ]
    )(`Should change guest s%`, ({key, value}) =>{
        const state = form.updateGuest(stateWithOneUser, "1", key, value)
        expect(state.guests[0][key]).toEqual(value)
    })
    it("Should not change guest when id does not exist", () =>{
        const state = form.updateGuest(stateWithOneUser, "2", "firstName", "Helena")
        expect(state.guests).toEqual(stateWithOneUser.guests)
    })
});