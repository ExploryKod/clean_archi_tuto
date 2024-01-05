import { ListenerMiddlewareInstance } from "@reduxjs/toolkit";
import { orderingSlice, orderingStep } from "./ordering.slice";

// On concentrer toute la logique de gestion des étapes via redux ici
//On sépare donc cela des config pure de redux présente dans store.ts (on appel là bas que cette fonction créé ici)
export const registerOrderingStepListener = (listener: ListenerMiddlewareInstance) => {
    listener.startListening({
        // Dés que l'on choisis un guest on passe à l'étape de choix de table (voir ordering.slice.ts)
        // On fait de l'évent driven archi simple >> effect est comme un useEffect, le listener écoute l'action chooseGuests et lance l'effet
        // Je choisi donc ici un évènement de type actionCreator
        actionCreator: orderingSlice.actions.chooseGuests,
        effect: (_, api) => {
          api.dispatch(orderingSlice.actions.setStep(orderingStep.TABLE));
        }
      });
}