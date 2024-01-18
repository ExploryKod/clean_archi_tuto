import {AppState} from "@taotask/modules/store/store";
import {OrderingDomainModel} from "@taotask/modules/order/core/model/ordering.domain-model";
import {useSelector} from "react-redux";

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
        return meals.find((meal) => meal === meal) ?? null
    }


    const tableId = state.ordering.form.tableId
    const table = state.ordering.availableTables.data.find((table) => table.id === tableId)!

    const meals = state.ordering.availableMeals.data;
    const organizerId = state.ordering.form.organizerId;
    const guests = state.ordering.form.guests.map((guest) =>  ({
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


    function onNext(){}

    function onPrevious(){}

    const summary = useSelector(selectSummary)

    return {
        onNext,
        onPrevious,
        summary
    }
}