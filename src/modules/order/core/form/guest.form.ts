import { produce } from "immer";
import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
import { IIDProvider } from "@ratatouille/modules/core/id-provider";
export class GuestForm {
    constructor(
        private idProvider:IIDProvider
    ) { }

    addGuest(state:OrderingDomainModel.Form) {
        // On ajoute ici temporairement le state pour mimer un paradigme fonctionnel
        // Création de Form pour éviter de spécifier via des commentaires qu'il faut un unique organisateur
        
        // Voir le cours sur immer et le paradigme fonctionnel vs impératif, pourquoi ici j'utilise dans produce le p imp.
        return produce(state, (draft) => {
            // je peux travailler sur draft comme si c'était un state, de façon immutable dans p. imp.
            draft.guests.push({
                id: this.idProvider.generate(),
                firstName: 'John',
                lastName: 'Doe',
                age: 0
            })
        })

        // ANCIENNE VERSION POUR COMPARARER AVEC LE REFACTO AVEC IMMER
        // return {
        //     ...state,
        //     guests: [
        //         ...state.guests,
        //         {
        //             id:this.idProvider.generate(),
        //             firstName: 'John',
        //             lastName: 'Doe',
        //             age: 0
        //         }
        //     ]
        // };
    }

    removeGuest(state:OrderingDomainModel.Form, id:string) {
        
        return produce (state, (draft) => {
            const index = draft.guests.findIndex((guest) => guest.id === id)
            if (index < 0) {
                return
            }
            draft.guests.splice(index, 1)
        })
        
        // return {
        //     ...state,
        //     guests: state.guests.filter(guest => guest.id !== id)
        // }
    }

    changeOrganizer(state: OrderingDomainModel.Form, id:string) {
        
        return produce(state, (draft) => {
           const exists = draft.guests.some((guest) => guest.id ===  id) 
           draft.organizerId = exists ? id : null
        })

        // La méthode some() teste si au moins un élément du tableau passe le test implémenté par la fonction fournie. 
        // Elle renvoie un booléen indiquant le résultat du test
        // return {
        //     ...state,
        //     organizerId: state.guests.some((guest) => guest.id ===  id) ? id : null
        // }
    }

    isSubmitable(state: OrderingDomainModel.Form) {
        return state.organizerId !== null
    }

    updateGuest<T extends keyof OrderingDomainModel.Guest>(
        state: OrderingDomainModel.Form, 
        id:string, 
        key:T, 
        value:OrderingDomainModel.Guest[T]) {

        return produce(state, (draft) => {
            const guest = draft.guests.find((guest) => guest.id === id)
            // on commence par une négation (mieux) que de vérifier si guest est true et mettre guest[key] dans la condition
            if (!guest) {
                return
            }
            guest[key] = value
        })

        // return {
        //     ...state,
        //     guests: state.guests.map((guest) => {
        //         if (guest.id === id) {
        //             console.log('update guest ', key, value)
        //             return {
        //                 ...guest,
        //                 [key]: value
        //             }
        //         } else {
        //             return guest;
        //         }
               
        //     })
        // }
    }
}