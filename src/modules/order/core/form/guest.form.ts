import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
import { nanoid } from "nanoid";
export class GuestForm {

    addGuest(state:OrderingDomainModel.Guest[]) {
        // On ajoute ici temporairement le state pour mimer un paradigme fonctionnel
        return [...state,{
            id:nanoid(),
            firstName: 'John',
            lastName: 'Doe',
            age: 0
        }];
    }
}