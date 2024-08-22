import {OrderingDomainModel} from '@taotask/modules/order/core/model/ordering.domain-model';
import {useSummary} from "@taotask/modules/order/react/sections/summary/use-summary.hook";

export const SummarySection = () => {
    const presenter = useSummary()

    return (<>
      <section className="bg-[rgba(236,253,245,0.4)] hover:bg-[rgba(236,253,245,0.6)] shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] mx-auto py-[50px] rounded w-full max-w-[1200px] animate-fade-in-down">
        <div className="flex flex-col mx-auto mb-5 w-full">
            <h3 className="mx-auto my-5 pb-5 font-bold text-[#854854] text-xl">Votre réservation</h3>
                <p className='mb-2 font-bold text-center text-md text-yellow-900'>Emplacement de la table</p>
                <p className={`mb-2 text-md italic text-center text-yellow-900`}>{presenter.summary.table.title}</p>
        </div>

        <div className="flex flex-col mx-auto w-full max-w-75">
            <p className={`mb-2 text-md font-bold text-center text-yellow-900`}>Invités et leurs plats:</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mx-auto my-3 w-full max-w-[75%]">
            {presenter.summary.guests.map((guest: any) => (
              <div key={guest.id} className={`
                flex flex-col justify-center items-center border-[#458236] border-1 
                mb-5 p-3 border rounded min-w-[300px] basis-1/4`}>
                  <div className="text-yellow-900">{guest.name}</div>
                  <div className="text-yellow-900">{guest.meals.entry && guest.meals.entry.title}</div>
                  <div className="text-yellow-900">{guest.meals.mainCourse && guest.meals.mainCourse.title}</div>
                  <div className="text-yellow-900">{guest.meals.dessert && guest.meals.dessert.title}</div>
                  <div className="text-yellow-900">{guest.meals.drink && guest.meals.drink.title}</div>
              </div>
          ))}
        </div>
          
       
       <div className="flex justify-center gap-2 mx-auto w-full">
            <button
            onClick={presenter.onPrevious}
            type="submit"
            className="inline-block bg-[#458236] hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 shadow-[0_4px_9px_-4px_#3b71ca] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] px-6 pt-2.5 pb-2 rounded focus:ring-0 font-medium text-white text-xs uppercase leading-normal transition duration-150 ease-in-out focus:outline-none">
            Précèdent
            </button>
            <button
            onClick={presenter.onNext}
            type="button"
            className="inline-block disabled:border-gray-200 bg-[#458236] hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 disabled:bg-gray-500 shadow-[0_4px_9px_-4px_#3b71ca] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] disabled:shadow-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] px-6 pt-2.5 pb-2 rounded focus:ring-0 font-medium text-white text-xs disabled:text-gray-50 uppercase leading-normal transition duration-150 ease-in-out focus:outline-none">
            Réserver
            </button>
        </div>
    </section>
    </>)
}