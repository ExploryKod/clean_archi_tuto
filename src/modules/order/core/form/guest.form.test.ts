import { GuestForm } from '@ratatouille/modules/order/core/form/guest.form';
import { OrderingDomainModel } from '@ratatouille/modules/order/core/model/ordering.domain-model';
import { IIDProvider } from '@ratatouille/modules/core/id-provider';
class StubIdProvider implements IIDProvider {
    generate() {
        return "1";
    }
}

// On hoiste nos states (intéressant pour refactor ensuite)
const idProvider = new StubIdProvider();
const initialEmptyState: OrderingDomainModel.Guest[] = [];
const stateWithOneUser: OrderingDomainModel.Guest[] = [{
    id:"1",
    firstName: 'John',
    lastName: 'Doe',
    age: 0
}];
const stateWithTwoUsers: OrderingDomainModel.Guest[] = [{
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
}];

describe('Add a Guest', () => {
    it('It should add a guest', () => {
        const form = new GuestForm(idProvider);
        
        const state = form.addGuest(initialEmptyState);
        expect(state).toEqual(
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
        expect(state).toEqual(
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
        expect(state).toEqual(
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
        expect(state).toEqual([]);
    });
});
