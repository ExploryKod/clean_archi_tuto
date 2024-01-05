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

export const orderingSlice = createSlice({
    name: 'ordering',
    initialState,
    reducers: {
        chooseGuests(state, action:PayloadAction<OrderingDomainModel.Form>){
            state.form = action.payload;
            state.step = orderingStep.TABLE;
        } 
    }
});

export const orderingReducer = orderingSlice.reducer;
export const orderingActions = orderingSlice.actions;




