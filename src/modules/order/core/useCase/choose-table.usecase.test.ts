import { OrderingDomainModel } from "@taotask/modules/order/core/model/ordering.domain-model";
import { chooseTable } from "@taotask/modules/order/core/useCase/choose-table.usecase";
import { createTestStore } from "@taotask/modules/testing/tests-environment";
// 1. On définit la structure de test puis store (createtestStore) puis le dispatch est appelé avec chooseTable
// 1. On va écrire la fonction chooseTable dans le usecase et on ajoute tableId dans notre orderingSlice initialState (dans le formulaire))
describe("Choose Table", () => {
    it("Should choose a table", () => {
        const store = createTestStore();
        store.dispatch(chooseTable("1"));
        expect(store.getState().ordering.form.tableId).toEqual("1");
        // On doit maintenant tester le step (il attend 2 et recevra 0 donc une erreur > red > green > refactor)
        // On va l'ajouter au reducer chooseTable pour le faire passer le plus vite possible
        // Une fois cela fait on va vérifier ici mais aussi dans les Redux DevTools sur l'UI (browser)
        // Nous devons ensuite ajouter un listener pour l'étape des MEALS (store/ordering.step.listener.ts)
        // Cela permet alors d'enlever la gestion des étapes du slide en lui-même (store/ordering.slice.ts)
        expect(store.getState().ordering.step).toEqual(OrderingDomainModel.OrderingStep.MEALS);
    });
});


