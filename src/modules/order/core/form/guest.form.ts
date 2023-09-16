import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
export class GuestForm {
    
    addGuest(state:OrderingDomainModel.Guest[]) {
        // On ajoute ici temporairement le state pour mimer un paradigme fonctionnel
        return [...state,{
            id:state.length === 0 ? 1 : state.length + 1,
            firstName: 'John',
            lastName: 'Doe',
            age: 0
        }];
    }
}