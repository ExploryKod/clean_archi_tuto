import { GuestForm } from '@ratatouille/modules/order/core/form/guest.form';
import { OrderingDomainModel } from '@ratatouille/modules/order/core/model/ordering.domain-model';
import { IIDProvider } from '@ratatouille/modules/core/id-provider';
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

const stateWithOneUser: OrderingDomainModel.Form = {
    guests: [{ id:"1",
    firstName: 'John',
    lastName: 'Doe',
    age: 0}],
    organizerId: null
}
   
const stateWithTwoUsers: OrderingDomainModel.Form = {
    guests: [{
        id:"1",
        firstName: 'John',
        lastName: 'Doe',
        age: 0
    },
    {
        id:"2",
        firstName: 'John',
        lastName: 'Doe',
        age: 0
    }],
    organizerId: null
};

describe('Add a Guest', () => {
    it('It should add a guest', () => {
        const form = new GuestForm(idProvider);
        
        const state = form.addGuest(initialEmptyState);
        expect(state.guests).toEqual(
            [{
                id:"1",
                firstName: 'John',
                lastName: 'Doe',
                age: 0
            }]
        );
    });
    it('It should add a guest when there is already one', () => {
        const form = new GuestForm(idProvider);
    
        const state = form.addGuest(stateWithOneUser);
        expect(state.guests).toEqual(
            [{
                id:"1",
                firstName: 'John',
                lastName: 'Doe',
                age: 0
            },
            {
                id:"1",
                firstName: 'John',
                lastName: 'Doe',
                age: 0
            }]
        );
    });
    it('It should add a guest when there is already two', () => {
        const form = new GuestForm(idProvider);
        
        const state = form.addGuest(stateWithTwoUsers);
        expect(state.guests).toEqual(
            [{
                id:"1",
                firstName: 'John',
                lastName: 'Doe',
                age: 0
            },
            {
                id:"2",
                firstName: 'John',
                lastName: 'Doe',
                age: 0
            },
            {
                id:"1",
                firstName: 'John',
                lastName: 'Doe',
                age: 0
            }]
        );
    });
});

describe('Remove a Guest', () => {
    it('It should not remove anyone when there is an empty state', () => {
        const form = new GuestForm(idProvider);
        const state = form.removeGuest(initialEmptyState, "1");
        expect(state.guests).toEqual([]);
    });
    it('Should remove user with id 1 when there is only a user with id 1 and it remains no user', () => {
        const form = new GuestForm(idProvider);
        const state = form.removeGuest(stateWithOneUser, "1");
        expect(state.guests).toEqual([]);
    });
    it('Should remove user with id 2 when there is a user with id 2 and it remain a user with id 1', () => {
        const form = new GuestForm(idProvider);
        const state = form.removeGuest(stateWithTwoUsers, "2");
        expect(state.guests).toEqual([
            {
                id:"1",
                firstName: 'John',
                lastName: 'Doe',
                age: 0
            }
        ]);
    });
});
