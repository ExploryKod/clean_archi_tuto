import { GuestForm } from '@ratatouille/modules/order/core/form/guest.form';
import { OrderingDomainModel } from '@ratatouille/modules/order/core/model/ordering.domain-model';

describe('Add a Guest', () => {
    it('It should add a guest', () => {
        const form = new GuestForm();
        const initialState: OrderingDomainModel.Guest[] = [];
        const state = form.addGuest(initialState);
        expect(state).toEqual(
            [{
                id:expect.any(String),
                firstName: 'John',
                lastName: 'Doe',
                age: 0
            }]
        );
    });
    it('It should add a guest when there is already one', () => {
        const form = new GuestForm();
        const initialState: OrderingDomainModel.Guest[] = [{
            id:expect.any(String),
            firstName: 'John',
            lastName: 'Doe',
            age: 0
        }];
        const state = form.addGuest(initialState);
        expect(state).toEqual(
            [{
                id:expect.any(String),
                firstName: 'John',
                lastName: 'Doe',
                age: 0
            },
            {
                id:expect.any(String),
                firstName: 'John',
                lastName: 'Doe',
                age: 0
            }]
        );
    });
});