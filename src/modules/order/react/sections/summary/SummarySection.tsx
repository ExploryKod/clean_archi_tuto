import {OrderingDomainModel} from '@taotask/modules/order/core/model/ordering.domain-model';
import {useSummary} from "@taotask/modules/order/react/sections/summary/use-summary.hook";

export const SummarySection = () => {
    const presenter = useSummary()

    return (<>
      <section className="
    w-full py-[50px] mx-auto max-w-[1200px] 
    bg-[rgba(236,253,245,0.4)] hover:bg-[rgba(236,253,245,0.6)] 
    rounded animate-fade-in-down shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
        <div className="mx-auto mb-5 w-full flex flex-col">
            <h3 className="mx-auto my-3 text-lg font-bold text-[#854854]">Votre réservation:</h3>
        </div>

          {presenter.summary.guests.map((guest) => (
              <div className="mx-auto mb-5 w-full flex flex-col items-center justify-center ">
                  <div>{guest.name}</div>
                  <div>{guest.meals.entry && guest.meals.entry.title}</div>
                  <div>{guest.meals.mainCourse && guest.meals.mainCourse.title}</div>
                  <div>{guest.meals.dessert && guest.meals.dessert.title}</div>
                  <div>{guest.meals.drink && guest.meals.drink.title}</div>
              </div>
          ))}
       
       <div className="w-full mx-auto flex justify-center gap-2">
            <button
            onClick={presenter.onPrevious}
            type="submit"
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
            Réserver
            </button>
        </div>
    </section>
    </>)
}