import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum orderingStep {
    GUESTS = 0,
    TABLE = 5,
    MEALS = 3,
    SUMMARY = 2,
    RESERVED = 4
}

export type OrderingState = {
    step: orderingStep,
    form: OrderingDomainModel.Form
}

export const initialState: OrderingState = {
    step: orderingStep.GUESTS,
    form: {
        guests: [],
        organizerId: null
    }
}
// On va séparer les logiques et utiliser l'event driven dev (en version simplifiée) > voir store.ts
// On va rassembler a logique entière qui suit l'étape de choix de guest dans un autre endroit, dans un listener
// voir 'Gestion des étapes' 5.45s
export const orderingSlice = createSlice({
    name: 'ordering',
    initialState,
    reducers: {
        setStep(state, action:PayloadAction<orderingStep>){
            state.step = orderingStep.TABLE;
        },
        chooseGuests(state, action:PayloadAction<OrderingDomainModel.Form>){
            state.form = action.payload;
        } 
    }
});

export const orderingReducer = orderingSlice.reducer;
export const orderingActions = orderingSlice.actions;




