import { orderingSlice } from "@taotask/modules/order/core/store/ordering.slice";
import { Dependencies } from "@taotask/modules/store/dependencies";
import { AppDispatch, AppGetState } from "@taotask/modules/store/store";
import { extractErrorMessage } from "@taotask/modules/shared/error.utils"
// 1. J'écris cette fonction avoir poser les bases de mon test (fetch-table.usecase.test.ts)
// 2. Le 3e argument a été mis aprés avoir eu un test qui failed > voir fetch-table.usecase.test.ts
// 2. Ce 3e argument a été passé dans ordering.slice.ts >> les dépendances elles-même et non tabeau d'objet passé dans les dépendances
// 2. C'est via les Thunks de redux > ExtraArgument que l'on peut passer ce 3e argument (store.ts)(Cours : TableGateway 7:00)
// 2. Je peux également passé en asynchrone ma function fetchTables car c'est un type Promise (Cours : TableGateway 7:00)
// 6. le underscore permet de gérer les "unused variable" (Cours : TableGateway 18:00)
export const fetchTables = async (dispatch: AppDispatch, _: AppGetState, dependencies:Dependencies) => {
    // 5. création du try - catch pour gérer les erreurs
    dispatch(orderingSlice.actions.handleTablesLoading());
    try {
        const tables = await dependencies.tableGateway?.getTables();
        // 3. Je créer donc un dispatch ce qui suppose de créer un nouveau reducers à côté de setStep et chooseGuests (ordering.slice.ts)
        dispatch(orderingSlice.actions.storeTables(tables || []));
        // 4. Aprés le test (voir 2. dans test) Je créer donc un dispatch pour le status ce qui suppose de créer un nouveau reducers à côté de setStep et chooseGuests (ordering.slice.ts)
    } catch(e) {
        // 5. Je créer donc un dispatch pour le status ce qui suppose de créer un nouveau reducers à côté de setStep et chooseGuests (ordering.slice.ts)
        // Ancienne version : dispatch(orderingSlice.actions.handleTablesError((e as Error).message));
        // Ici le e est un type unknown et il peut sortir n'importe quoi 
        // donc le mieux c de créer une fonction pour gérer les erreurs (extractError dans shared/error.utils.ts) avec le type string pour e.message et Error pour le e
        dispatch(orderingSlice.actions.handleTablesError(extractErrorMessage(e)));
    }
};
