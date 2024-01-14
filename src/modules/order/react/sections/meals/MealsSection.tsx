import {OrderingDomainModel} from '@taotask/modules/order/core/model/ordering.domain-model';
import { useMeals } from '@taotask/modules/order/react/sections/meals/use-meals.hook';
import Carousel from '@taotask/modules/order/react/components/carousel/Carousel';
import '@taotask/modules/order/react/components/carousel/Carousel.css';



export const MealsSection = () => {
    const presenter = useMeals()

    return (<>
      <section className="
    w-full py-[50px] mx-auto max-w-[1200px] 
    bg-[rgba(236,253,245,0.4)] hover:bg-[rgba(236,253,245,0.6)] 
    rounded animate-fade-in-down shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
        <div className="mx-auto mb-5 w-full flex flex-col">
            <h3 className="mx-auto my-3 text-lg font-bold text-[#854854]">Choix de vos plats:</h3>  
        </div> 

        <div className="App">

    </div>
        <div className="mx-auto mb-5 w-full flex flex-col items-center justify-center gap-5 bg-gray-500">
             {presenter.guests.map((guest:any) => (
                <>
                    <div key={guest.id}>
                        <span>{guest.firstName} - {guest.LastName}</span>
                        <div className="mx-auto mb-5 w-full flex flex-col items-center justify-center gap-5 bg-gray-500">
                        <Carousel
                            show={1}
                         >
                            {presenter.getSelectableEntries(guest.id).map((entry) => (<div className="text-center bg-yellow-200" key={entry.id}>{entry.title}</div>))}
                        </Carousel>
                        </div>
                    </div>
                </>
             ))}
        </div>
   
        <div className="mx-auto mb-5 w-full flex flex-col bg-gray-500">
     
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
  
       <div className="w-full mx-auto flex justify-center gap-2">
            <button
            onClick={presenter.onPrevious}
            type="button"
            className="inline-block rounded bg-[#458236] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white 
            shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            focus:outline-none focus:ring-0 
            active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
            dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            Précèdent
            </button>
            <button
            onClick={presenter.onNext}
            type="button"
            className="inline-block rounded bg-[#458236]  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white 
            shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 
            disabled:bg-gray-500 disabled:text-gray-50 disabled:border-gray-200 disabled:shadow-none
            hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 
            active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
            dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
            dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
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
    
   
    </>)
}




