import { OrderingDomainModel } from "@taotask/modules/order/core/model/ordering.domain-model";
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
register();

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

    const guests: OrderingDomainModel.Guest[] = [
        {id: 1, firstName: "John", lastName: "Doe", age: 18, meals: {entry: "ee", mainCourse: "dd", dessert: "klk", drink: "okkj"}},
        {id: 1, firstName: "John", lastName: "Doe", age: 18, meals: {entry: "ee", mainCourse: "dd", dessert: "klk", drink: "okkj"}}
    ]

    const swiperElRef = useRef<any>(null);

    useEffect(() => {
      // listen for Swiper events using addEventListener
      if (!swiperElRef.current) return;
      swiperElRef.current.addEventListener('swiperprogress', (e: any) => {
        const [swiper, progress] = e.detail;
        console.log(progress);
      });
      if (!swiperElRef.current) return;
      swiperElRef.current.addEventListener('swiperslidechange', (e: any) => {
        console.log('slide changed');
      });
    }, []);

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