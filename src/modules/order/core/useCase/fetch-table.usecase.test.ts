import { createTestStore } from "@ratatouille/modules/testing/tests-environment";
import { TableFactory } from "@ratatouille/modules/order/core/model/table.factory";
import { fetchTables } from "@ratatouille/modules/order/core/useCase/fetch-table.usecase";

describe("Fetch table", () => {
    it("Should fetch a table", () => {
        const table = TableFactory.create({ id: "1" });
        const listOfTables = [table];

        const store = createTestStore({
            dependencies: {
                // On ajoute cette nouvelle dépendance dans le tableau de dépendances (store/dependencies.ts)
                tableGateway: {
                    getTables: () => Promise.resolve(listOfTables),
                }
            },
        });
        store.dispatch(fetchTables);
        // availableTables est un nouveau state ce qui a supposé la création de nouvelles entrées dans OrderingState et InitialState (store/ordering.slice.ts)
        // Le 2e test qui échoue est: expect [ { capacity: 10, id: '1', title: 'Table 1' } ]‍ but has: ⁠[]⁠
        // Ce 2e test engendre la création d'un 3e argument dans la fonction fetchTables (fetch-table.usecase.ts) ainsi que le dispatch
        expect(store.getState().ordering.availableTables.data).toEqual(listOfTables);
    });
});
