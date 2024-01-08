import { OrderingDomainModel } from "@taotask/modules/order/core/model/ordering.domain-model";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type OrderingState = {
    step: OrderingDomainModel.OrderingStep,
    form: OrderingDomainModel.Form
    availableTables: {
        status: 'idle' | 'loading' | 'success' | 'error';
        error: string | null;
        data: OrderingDomainModel.Table[];
    };
}

export const initialState: OrderingState = {
    step: OrderingDomainModel.OrderingStep.GUESTS,
    form: {
        guests: [],
        organizerId: null,
        tableId: null
    },
    availableTables: {
        status: 'idle',
        error: null,
        data: []
    },
}
// On va séparer les logiques et utiliser l'event driven dev (en version simplifiée) > voir store.ts
// On va rassembler a logique entière qui suit l'étape de choix de guest dans un autre endroit, dans un listener
// voir 'Gestion des étapes' 5.45s
export const orderingSlice = createSlice({
    name: 'ordering',
    initialState,
    reducers: {
        setStep(state, action:PayloadAction<OrderingDomainModel.OrderingStep>){
            state.step = action.payload;
            // Version non-fonctionnel mais utile au début pour accéder juste à la section TABLE
            // state.step = OrderingDomainModel.OrderingStep.TABLE;
        },
        // Ici j'écris ce reducer suite à avoir écris le 4. de fetch-table.usecase.ts 
        // Ici pas besoin d'action car on ne fait que changer le status 
        // Aprés cette étape on doit retourner voir les test de 2. pour voir si ça passe
        handleTablesLoading(state){
            state.availableTables.status = 'loading';
            state.availableTables.error = null;
        },
        // Ici j'écris ce reducer suite à avoir écris le 5. de fetch-table.usecase.ts
        // Ici on avait pas besoin d'action tant qu' on ne faisait que changer le status mais pour l'erreur on a besoin de l'action
        handleTablesError(state, action: PayloadAction<string>){
            state.availableTables.status = 'error';
            state.availableTables.error = action.payload;
        },
        // tableau de tables (commentaire inutil hors apprentissage > les types sont là pour ça)
        storeTables(state, action:PayloadAction<OrderingDomainModel.Table[]>){
            state.availableTables.data = action.payload;
            state.availableTables.status = 'success';
        },
        chooseGuests(state, action:PayloadAction<OrderingDomainModel.Form>){
            state.form = action.payload;
        },
        chooseTable(state, action:PayloadAction<string>){
            state.form.tableId = action.payload;
            // Ne sert plus car on a créé un listener:
            // state.step = OrderingDomainModel.OrderingStep.MEALS;
        }, 
    }
});

export const orderingReducer = orderingSlice.reducer;
export const orderingActions = orderingSlice.actions;




