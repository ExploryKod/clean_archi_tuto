"use client"
import React from 'react';
import { useRestaurantSection } from "@ratatouille/modules/order/react/sections/use-restaurant-section";
import { Checkbox } from "@material-tailwind/react";
 
export const RestaurantSection: React.FC<{}> = () => {
    const presenter:any = useRestaurantSection();
    
    return <section className="w-full py-[50px] mx-auto max-w-[1200px] bg-[rgba(236,253,245,0.4)] hover:bg-[rgba(236,253,245,0.6)] rounded animate-fade-in-down shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
        <div className="mx-auto mb-5 w-full flex">
            <h2 className="mx-auto my-3 text-xl font-bold text-[#854854]">Choix du restaurant</h2>
        </div>
        {presenter.RestaurantList.restaurants.map((restaurant:any) => (
            <div key={restaurant.id}>
                <RestaurantRows 
                id={restaurant.id}
                restaurantName={restaurant.restaurantName}
                restaurantType={restaurant.restaurantType}
                stars={restaurant.stars} 
                changeRestaurant={presenter.changeRestaurant}
                isSelected={restaurant.id === presenter.restaurantList.restaurantId}
                />
            </div>
        ))}
       
       <div className="w-full mx-auto flex justify-center gap-2">
            <button
            onClick={presenter.displayRestaurants}
            type="submit"
            className="inline-block rounded bg-[#458236] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white 
            shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            focus:outline-none focus:ring-0 
            active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
            dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            Voir nos restaurants
            </button>
        </div>
    </section>
}

const RestaurantRows: React.FC<{
    id: string | number,
    restaurantName: string,
    restaurantType: string,
    stars: number,
    isSelected: boolean,
    changeRestaurant: (id:string | number) => void
}> = ({id,restaurantName,restaurantType, stars, changeRestaurant, isSelected}) => {
    return (
    <div className="my-5 mx-auto flex gap-2 justify-center">
        
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-lg font-bold text-[#854854]">{restaurantName}</h3>
                <p className="text-sm font-bold text-[#854854]">{restaurantType}</p>
                <p className="text-sm font-bold text-[#854854]">{stars}</p>
            </div>
            
            <div className="relative flex flex-col justify-end items-center">
                <div className="absolute left-1 bottom-[-5px]">
                    <Checkbox  
                    defaultChecked={isSelected}
                    onChange={() => changeRestaurant(id)} 
                    ripple={true}
                    color="teal"
                    className="h-6 w-6 shadow-[0_2px_3px_-2px_#000] bg-gray-100 rounded"
                    />
                </div>
            </div>

    </div>
    )
}