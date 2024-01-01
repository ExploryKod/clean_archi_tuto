import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
import { createSlice } from "@reduxjs/toolkit";

export type OrderingState = {
    form: OrderingDomainModel.Form
}

export const initialState: OrderingState = {
    form: {
        guests: [],
        organizerId: null
    }
}

export const orderingSlice = createSlice({
    name: 'ordering',
    initialState,
    reducers: {}
});

export const orderingReducer = orderingSlice.reducer;
export const orderingActions = orderingSlice.actions;




