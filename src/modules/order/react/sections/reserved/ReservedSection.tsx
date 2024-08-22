import { useReserved } from './use-reserved.hook';

export const ReservedSection = () => {
    const presenter = useReserved();


    return (<>
      <section className="bg-[rgba(236,253,245,0.4)] hover:bg-[rgba(236,253,245,0.6)] shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] mx-auto py-[50px] rounded w-full max-w-[1200px] animate-fade-in-down">
        <div className="flex flex-col mx-auto mb-5 w-full">
            <h3 className="mx-auto my-3 font-bold text-[#854854] text-lg">Merci pour votre réservation</h3>  
        </div>

        <div className="flex flex-col mx-auto mb-5">
            <div className="bg-[#6A4A38] mx-auto px-9 py-6 rounded w-full max-w-[600px]">
            <p className={`mb-2 text-md text-center text-[#FDEFD8]`}>Etant donné un trés grand nombre de demandes, 
                il n&#39;est pas possible pour ce restaurant de proposer un choix de créneaux, nous avons donc choisi pour vous un créneau disponible.</p>
                <p className={`mb-2 text-md text-center text-[#FDEFD8]`}>Nous vous donnons rendez-vous aprés-demain à <span className="font-bold">19h30</span></p>
                <p className={`mb-2 text-md text-center text-[#FDEFD8]`}>Sans garantir que le créneau puisse être changé, le restaurant laisse son téléphone au cas où vous voudriez le changer :</p>
                <a href="tel:#" className={`block text-md text-center font-bold  text-[#FDEFD8] hover:text-[#458236] `}>07.09.56.90.00</a>
            </div>
          
        </div>
       
       <div className="flex justify-center gap-2 mx-auto w-full">
            <button
            onClick={presenter.onNewTable}
            type="button"
            className="inline-block disabled:border-gray-200 bg-[#458236] hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 disabled:bg-gray-500 shadow-[0_4px_9px_-4px_#3b71ca] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] disabled:shadow-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] px-6 pt-2.5 pb-2 rounded focus:ring-0 font-medium text-white text-xs disabled:text-gray-50 uppercase leading-normal transition duration-150 ease-in-out focus:outline-none">
            Nouvelle réservation
            </button>
            <a
            href="/"
            type="button"
            className="inline-block disabled:border-gray-200 bg-[#458236] hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 disabled:bg-gray-500 shadow-[0_4px_9px_-4px_#3b71ca] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] disabled:shadow-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] px-6 pt-2.5 pb-2 rounded focus:ring-0 font-medium text-white text-xs disabled:text-gray-50 uppercase leading-normal transition duration-150 ease-in-out focus:outline-none">
            Retour Accueil
            </a>
        </div>
    </section>
    </>)
}