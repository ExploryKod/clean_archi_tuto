import { createTestStore } from "@taotask/modules/testing/tests-environment"
import { OrderingDomainModel } from "@taotask/modules/order/core/model/ordering.domain-model"
import { GuestFactory } from "@taotask/modules/order/core/model/guest.factory"
import { orderingActions } from "@taotask/modules/order/core/store/ordering.slice"
import { chooseGuests } from "@taotask/modules/order/core/useCase/choose-guest.usecase"
// order/store > Test ici (test.ts)> UseCase choose guest (ts) > test ici > presenter (react) (onNext())
describe("Choose a guest", () => {
    it("should return a guest", async () => {
        const store = createTestStore()
        const form: OrderingDomainModel.Form = {
            guests: [
                GuestFactory.create({ id: "1" }),
            ],
            organizerId: null,
            tableId: null
        }

        await store.dispatch(chooseGuests(form));
        expect(store.getState().ordering.form).toEqual(form)
        expect(store.getState().ordering.step).toEqual(OrderingDomainModel.OrderingStep.TABLE)
    })
    
})