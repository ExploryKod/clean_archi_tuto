"use client"
import React from 'react';
import { useRestaurantSection } from "@ratatouille/modules/order/react/sections/use-restaurant-section";
import { Radio } from "@material-tailwind/react";
import { OrderingDomainModel } from '@ratatouille/modules/order/core/model/ordering.domain-model';
 
export const RestaurantSection: React.FC<{}> = () => {
    const presenter:any = useRestaurantSection();
    
    return <section className="w-full py-[50px] mx-auto max-w-[1200px] bg-[rgba(236,253,245,0.4)] hover:bg-[rgba(236,253,245,0.6)] rounded animate-fade-in-down shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
        <div className="mx-auto mb-5 w-full flex">
            <h2 className="mx-auto my-3 text-xl font-bold text-[#854854]">Choix du restaurant</h2>
        </div>
        <div className="flex gap-3 justify-center items-center flex-wrap">
        {presenter.restaurantList.restaurants.length > 0 ? presenter.restaurantList.restaurants
        .filter((restaurant:OrderingDomainModel.Restaurant) => restaurant.id)
        .map((restaurant:OrderingDomainModel.Restaurant) => (
            <div key={restaurant.id}>
                <RestaurantRows 
                id={restaurant.id.toString()}
                restaurantName={restaurant.restaurantName}
                restaurantType={restaurant.restaurantType}
                stars={restaurant.stars} 
                selectRestaurant={presenter.selectRestaurant}
                selectedRestaurantId={presenter.restaurantList.restaurantId ? presenter.restaurantList.restaurantId.toString() : null}
                />
            </div>
        )) : <div className="my-5 mx-auto w-1/2 rounded px-5 py-2 ">
                <p className="text-center font-semibold text-red-900">Aucun restaurant n&apos;est disponible</p>
            </div>}
       </div>
       <div className="w-full mx-auto flex justify-center gap-2">
            <button
            onClick={presenter.selectRestaurant}
            type="button"
            className="inline-block rounded bg-[#458236] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white 
            shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            focus:outline-none focus:ring-0 
            active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
            dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            Valider votre choix
            </button>
        </div>
    </section>
}

const RestaurantRows: React.FC<{
    id: string,
    selectedRestaurantId: string,
    restaurantName: string,
    restaurantType: string,
    stars: number,
    selectRestaurant: any,
}> = ({id, restaurantName,restaurantType, stars, selectRestaurant, selectedRestaurantId}) => {
 
    return (
    
    <div onClick={() => selectRestaurant(id)} className={`w-full my-5 mx-auto flex gap-2`} >
            <div className={`${selectedRestaurantId === id ? "bg-red-700" : "bg-red-400"} cursor-pointer my-5 mx-3 p-5 min-w-[300px] rounded`}>
                <div className="flex flex-col gap-3 items-center justify-center">
                    <h3 className="text-lg font-bold text-[#854854]">{restaurantName}</h3>
                    <p className="text-lg font-bold text-[#854854]">{restaurantType}</p>
                    <ul className="flex g-2">
                        {stars > 0  && stars < 7 ? [...Array(stars)].map((e, i) => <li key={i} className="text-lg font-bold text-[#854854]">⭐</li>) : null}
                    </ul>
                </div>
            </div>
    </div>
    )
}