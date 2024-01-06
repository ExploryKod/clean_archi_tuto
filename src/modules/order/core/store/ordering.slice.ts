import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export type OrderingState = {
    step: OrderingDomainModel.OrderingStep,
    form: OrderingDomainModel.Form
    availableTables: {
        data: OrderingDomainModel.Table[];
    };
}

export const initialState: OrderingState = {
    step: OrderingDomainModel.OrderingStep.GUESTS,
    form: {
        guests: [],
        organizerId: null
    },
    availableTables: {
        data: []
    }
}
// On va séparer les logiques et utiliser l'event driven dev (en version simplifiée) > voir store.ts
// On va rassembler a logique entière qui suit l'étape de choix de guest dans un autre endroit, dans un listener
// voir 'Gestion des étapes' 5.45s
export const orderingSlice = createSlice({
    name: 'ordering',
    initialState,
    reducers: {
        setStep(state, action:PayloadAction<OrderingDomainModel.OrderingStep>){
            state.step = OrderingDomainModel.OrderingStep.TABLE;
        },
        // tableau de tables (commentaire inutil hors apprentissage > les types sont là pour ça)
        storeTables(state, action:PayloadAction<OrderingDomainModel.Table[]>){
            state.availableTables.data = action.payload;
        },
        chooseGuests(state, action:PayloadAction<OrderingDomainModel.Form>){
            state.form = action.payload;
        } 
    }
});

export const orderingReducer = orderingSlice.reducer;
export const orderingActions = orderingSlice.actions;




