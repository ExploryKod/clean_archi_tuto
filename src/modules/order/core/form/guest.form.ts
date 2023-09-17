import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
import { IIDProvider } from "@ratatouille/modules/core/id-provider";
export class GuestForm {
    constructor(
        private idProvider:IIDProvider
    ) { }
    addGuest(state:OrderingDomainModel.Form) {
        // On ajoute ici temporairement le state pour mimer un paradigme fonctionnel
        // Création de Form pour éviter de spécifier via des commentaires qu'il faut un unique organisateur
        return {
            ...state,
            guests: [
                ...state.guests,
                {
                    id:this.idProvider.generate(),
                    firstName: 'John',
                    lastName: 'Doe',
                    age: 0
                }
            ]
        };
    }

    removeGuest(state:OrderingDomainModel.Form, id:string) {
        return {
            ...state,
            guests: state.guests.filter(guest => guest.id !== id)
        }
    }
}