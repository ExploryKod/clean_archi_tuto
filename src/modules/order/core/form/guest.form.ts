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

    changeOrganizer(state: OrderingDomainModel.Form, id:string) {
        // La méthode some() teste si au moins un élément du tableau passe le test implémenté par la fonction fournie. 
        // Elle renvoie un booléen indiquant le résultat du test
        return {
            ...state,
            organizerId: state.guests.some((guest) => guest.id ===  id) ? id : null
        }
    }

    isSubmitable(state: OrderingDomainModel.Form) {
        return state.organizerId !== null
    }

    updateGuest<T extends keyof OrderingDomainModel.Guest>(
        state: OrderingDomainModel.Form, 
        id:string, 
        key:T, 
        value:OrderingDomainModel.Guest[T]) {
        return {
            ...state,
            guests: state.guests.map((guest) => {
                if (guest.id === id) {
                    return {
                        ...guest,
                        [key]: value
                    }
                } else {
                    return guest;
                }
               
            })
        }
    }
}