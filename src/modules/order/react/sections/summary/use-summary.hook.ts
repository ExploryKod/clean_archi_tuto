// Pour le récap on ne tape pas en direct dans le redux mais dans la couche intermédiaire qui est le présenteur
import {AppState, useAppDispatch} from "@taotask/modules/store/store";
import {OrderingDomainModel} from "@taotask/modules/order/core/model/ordering.domain-model";
import {useSelector} from "react-redux";
import {orderingSlice} from "@taotask/modules/order/core/store/ordering.slice";
import OrderingStep = OrderingDomainModel.OrderingStep;

type MealSummary = {
    id: string,
    title: string
}

type Guest = {
    id: string | number,
    name: string,
    isOrganizer: boolean,
    meals: {
        entry: MealSummary | null,
        mainCourse: MealSummary,
        dessert: MealSummary | null,
        drink: MealSummary | null
    }
}

type Summary = {
    table: {
        id: string,
        title: string
    },
    guests: Array<Guest>
};

const selectSummary = (state: AppState): Summary => {

    function findMealById(id: string) {
        return meals.find((meal: OrderingDomainModel.Meal) => meal.id === id) ?? null
    }


    const tableId = state.ordering.form.tableId
    const table = state.ordering.availableTables.data.find((table: OrderingDomainModel.Table) => table.id === tableId)!

    const meals = state.ordering.availableMeals.data;
    const organizerId = state.ordering.form.organizerId;
    const guests = state.ordering.form.guests.map((guest: OrderingDomainModel.Guest) =>  ({
        id: guest.id,
        name: `${guest.firstName} ${guest.lastName}`,
        isOrganizer: guest.id === organizerId,
        meals: {
            entry: guest.meals.entry ? findMealById(guest.meals.entry): null,
            mainCourse: findMealById(guest.meals.mainCourse!)!,
            dessert: guest.meals.dessert ? findMealById(guest.meals.dessert): null,
            drink: guest.meals.drink ? findMealById(guest.meals.drink): null
        }
    }))

    return {
        table : {
            id: table.id,
            title: table.title
        },
        guests
    };
};

export const useSummary = () => {

    function onNext(){
       dispatch(orderingSlice.actions.setStep(OrderingStep.RESERVED))
    }

    function onPrevious(){
        dispatch(orderingSlice.actions.setStep(OrderingStep.MEALS))
    }

    const dispatch = useAppDispatch()
    const summary: Summary = useSelector(selectSummary)

    return {
        onNext,
        onPrevious,
        summary
    }
}