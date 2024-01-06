import { createTestStore } from "@taotask/modules/testing/tests-environment";
import { TableFactory } from "@taotask/modules/order/core/model/table.factory";
import { fetchTables } from "@taotask/modules/order/core/useCase/fetch-table.usecase";

describe("Fetch table", () => {
    it("Should fetch a table", async () => {
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
        // 2. Les tests de status se font seulement aprés avoir poser les type et availableTables > status dans ordering.slice.ts
        // 2. Le 1er test qui échoue échoue donc forcément car 'idle' est la valeur par défaut (et non loading ou success)
        // 2. Pour que les test passe il faut alors dispatch une action qui va se charger du status (handleTableLoading) > voir fetch-table.usecase.ts

        // 2. Avant de résoudre la promise le status doit être égale à loading d'où la création d'une variable promise
        const promise = await store.dispatch(fetchTables);
        expect(store.getState().ordering.availableTables.status).toEqual("loading");
        await promise;
        // 1. availableTables est un nouveau state ce qui a supposé la création de nouvelles entrées dans OrderingState et InitialState (store/ordering.slice.ts)
        // 1. Le 2e test qui échoue est: expect [ { capacity: 10, id: '1', title: 'Table 1' } ]‍ but has: ⁠[]⁠
        // 1. Ce 2e test engendre la création d'un 3e argument dans la fonction fetchTables (fetch-table.usecase.ts) ainsi que le dispatch
        expect(store.getState().ordering.availableTables.data).toEqual(listOfTables);
        //2. Pour que les test des status passe il faut transformer ce test en async
        expect(store.getState().ordering.availableTables.status).toEqual("success");
    });
});
