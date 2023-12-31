import { createTestStore } from "@ratatouille/modules/testing/tests-environment"
import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model"
import { GuestFactory } from "@ratatouille/modules/order/core/model/guest.factory"

describe("Choose a guest", () => {
    it("should return a guest", () => {
        const store = createTestStore()
        const form: OrderingDomainModel.Form = {
            guests: [
                GuestFactory.create({ id: "1", name: "John" }),
            ],
            organizerId: null,
        }
    })
})