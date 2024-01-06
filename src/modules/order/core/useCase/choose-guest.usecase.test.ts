import { createTestStore } from "@ratatouille/modules/testing/tests-environment"
import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model"
import { GuestFactory } from "@ratatouille/modules/order/core/model/guest.factory"
import { orderingActions } from "@ratatouille/modules/order/core/store/ordering.slice"
import { chooseGuests } from "@ratatouille/modules/order/core/useCase/choose-guest.usecase"
// order/store > Test ici (test.ts)> UseCase choose guest (ts) > test ici > presenter (react) (onNext())
describe("Choose a guest", () => {
    it("should return a guest", async () => {
        const store = createTestStore()
        const form: OrderingDomainModel.Form = {
            guests: [
                GuestFactory.create({ id: "1" }),
            ],
            organizerId: null,
        }

        await store.dispatch(chooseGuests(form));
        expect(store.getState().ordering.form).toEqual(form)
        expect(store.getState().ordering.step).toEqual(OrderingDomainModel.OrderingStep.TABLE)
    })
    
})