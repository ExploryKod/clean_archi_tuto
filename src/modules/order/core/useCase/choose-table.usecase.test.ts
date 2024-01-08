import { chooseTable } from "@taotask/modules/order/core/useCase/choose-table.usecase";
import { createTestStore } from "@taotask/modules/testing/tests-environment";
// 1. On définit la structure de test puis store (createtestStore) puis le dispatch est appelé avec chooseTable
// 1. On va écrire la fonction chooseTable dans le usecase et on ajoute tableId dans notre orderingSlice initialState (dans le formulaire))
describe("Choose Table", () => {
    it("Should choose a table", () => {
        const store = createTestStore();

        store.dispatch(chooseTable("1"));
        expect(store.getState().ordering.form.tableId).toEqual("1");
    });
});


