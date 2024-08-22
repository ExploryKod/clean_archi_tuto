import {OrderingDomainModel} from '@taotask/modules/order/core/model/ordering.domain-model';
import { useMeals } from '@taotask/modules/order/react/sections/meals/use-meals.hook';
import Carousel from '@taotask/modules/order/react/components/carousel/Carousel';
import '@taotask/modules/order/react/components/carousel/carousel.css';
import React from "react";



export const MealsSection = () => {
    const presenter = useMeals()

    return (<>
      <section className="bg-[rgba(236,253,245,0.4)] hover:bg-[rgba(236,253,245,0.6)] shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] mx-auto py-[50px] rounded w-full max-w-[1200px] animate-fade-in-down">
        <div className="flex flex-col mx-auto mb-5 w-full">
            <h3 className="mx-auto my-3 font-bold text-[#854854] text-lg">Choix de vos plats:</h3>  
        </div> 

        <div className="App">

    </div>
 
        <div className="flex flex-col mx-auto mb-5 w-full">
     
        {presenter.guests.map((guest:any) => (
            <MealComposer 
                key={guest.id} 
                guestId={guest.id}
                firstName={guest.firstName}
                lastName={guest.lastName}
                selectedEntryId={guest.meals.entry} 
                selectedMainCourseId={guest.meals.mainCourse}
                selectedDessertId={guest.meals.dessert}
                selectedDrinkId={guest.meals.drink}
                entries={presenter.getSelectableEntries(guest.id)}
                mainCourses={presenter.getSelectableMainCourses(guest.id)}
                desserts={presenter.getSelectableDesserts(guest.id)}
                drinks={presenter.getSelectableDrinks(guest.id)}
                onEntrySelected={presenter.assignEntry}
                onMainCourseSelected={presenter.assignMainCourse}
                onDessertSelected={presenter.assignDessert}
                onDrinkSelected={presenter.assignDrink}
            />))}
           
       </div>
  
       <div className="flex justify-center gap-2 mx-auto w-full">
            <button
            onClick={presenter.onPrevious}
            type="button"
            className="inline-block bg-[#458236] hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 shadow-[0_4px_9px_-4px_#3b71ca] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] px-6 pt-2.5 pb-2 rounded focus:ring-0 font-medium text-white text-xs uppercase leading-normal transition duration-150 ease-in-out focus:outline-none">
            Précèdent
            </button>
            <button
            onClick={presenter.onNext}
            type="button"
            className="inline-block disabled:border-gray-200 bg-[#458236] hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 disabled:bg-gray-500 shadow-[0_4px_9px_-4px_#3b71ca] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] disabled:shadow-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] px-6 pt-2.5 pb-2 rounded focus:ring-0 font-medium text-white text-xs disabled:text-gray-50 uppercase leading-normal transition duration-150 ease-in-out focus:outline-none">
            Suivant
            </button>
        </div>
    </section>
    </>)

}

export const MealComposer: React.FC<{
    guestId: string,
    firstName: string,
    lastName: string,

    selectedEntryId: string,
    selectedMainCourseId: string,
    selectedDessertId: string,
    selectedDrinkId: string,

    entries: OrderingDomainModel.Meal[],
    mainCourses: OrderingDomainModel.Meal[],
    desserts: OrderingDomainModel.Meal[],
    drinks: OrderingDomainModel.Meal[],

    onEntrySelected: (guestId:string, id: string) => void,
    onMainCourseSelected: (guestId:string, id: string) => void,
    onDessertSelected: (guestId:string, id: string) => void,
    onDrinkSelected: (guestId:string, id: string) => void,

}> = ({
    guestId,
    firstName,
    lastName,

    selectedEntryId,
    selectedMainCourseId,
    selectedDessertId,
    selectedDrinkId,

    entries,
    mainCourses,
    desserts,
    drinks,

    onEntrySelected,
    onMainCourseSelected,
    onDessertSelected,
    onDrinkSelected,
}) => {
    return (<>

        <div className="flex flex-col mx-auto mb-5 w-full">
            <h4 className="mx-auto my-3 font-bold text-lg">{firstName} {lastName}</h4>
        </div>

        <div className="flex flex-wrap mx-auto mb-5 w-full max-w-[1200px]">
            {entries.map((entry) => (
                <div key={entry.id} onClick={() => onEntrySelected(guestId, entry.id)} className={`
                max-w-[300px] my-5 mx-auto flex items-center justify-center gap-2`} >
                    <div className={`cursor-pointer ${selectedEntryId === entry.id ? "bg-[#C9371F]" : "bg-yellow-700"} hover:opacity-90
                        my-5 mx-3 p-5 w-[200px] min-h-[200px] flex-wrap rounded bg-yellow-700`}>
                        <div className="flex flex-col justify-center items-start gap-3">
                            <h3 className={`text-center text-lg font-bold text-yellow-100`}>{entry.title}</h3>
                            <p className={`text-center text-sm font-bold text-yellow-100`}>{entry.price} €</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>


    </>)
}




