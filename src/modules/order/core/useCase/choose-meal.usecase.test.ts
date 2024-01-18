import {GuestFactory} from "@taotask/modules/order/core/model/guest.factory";
import {createTestStore} from "@taotask/modules/testing/tests-environment";
import {GuestForm} from "@taotask/modules/order/core/form/guest.form";
import {chooseMeal} from "@taotask/modules/order/core/useCase/choose-meal.usecase";
import {OrderingDomainModel} from "@taotask/modules/order/core/model/ordering.domain-model";

const guestForm = {
    guests: [
        GuestFactory.create({
            id: "1",
            meals: {entry: "", mainCourse: "", dessert: "", drink: ""}
        })
    ],
    organizerId: "1",
    tableId: "1"
}
describe("Choosing a meal", () => {

    it("Should choose a meal", () => {
        const store = createTestStore()
        store.dispatch(chooseMeal(guestForm))
        expect(store.getState().ordering.form.guests).toEqual(guestForm.guests)
        expect(store.getState().ordering.step).toEqual(OrderingDomainModel.OrderingStep.SUMMARY)
    })
})