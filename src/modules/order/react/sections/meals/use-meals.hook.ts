import { OrderingDomainModel } from "@taotask/modules/order/core/model/ordering.domain-model";

export const useMeals = () => {
    function getSelectableEntries(guestId: string): OrderingDomainModel.Meal[] {
        return [];
    }

    function getSelectableMainCourses(guestId: string): OrderingDomainModel.Meal[] {
        return [];
    }

    function getSelectableDesserts(guestId: string): OrderingDomainModel.Meal[] {
        return [];
    }

    function getSelectableDrinks(guestId: string): OrderingDomainModel.Meal[] {
        return [];
    }

    function assignEntry(guestId: string, mealId: string) {}

    function assignMainCourse(guestId: string, mealId: string) {}

    function assignDessert(guestId: string, mealId: string) {}

    function assignDrink(guestId: string, mealId: string) {}

    function onNext() {
        // dispatch(orderingSlice.actions.setStep(OrderingDomainModel.OrderingStep.SUMMARY))
    }

    function onPrevious() {}

    function isSubmittable() { return false; }

    const guests: OrderingDomainModel.Guest[] = []

    return {
        getSelectableEntries,
        getSelectableMainCourses,
        getSelectableDesserts,
        getSelectableDrinks,
        assignEntry,
        assignMainCourse,
        assignDessert,
        assignDrink,
        onNext,
        onPrevious,
        guests,
        isSubmittable: isSubmittable()
    }
}