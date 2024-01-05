"use client"
import React from 'react';
import { OrderingDomainModel } from '@ratatouille/modules/order/core/model/ordering.domain-model';

export const RestaurantSection: React.FC<{
    restaurantList: OrderingDomainModel.RestaurantList,
    selectRestaurant: any,
}> = ({restaurantList, selectRestaurant}) => {

    return <section className={`w-full py-[50px] mx-auto max-w-[1200px] rounded animate-fade-in-down 
                                shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
                                bg-[rgba(236,253,245,0.4)] hover:bg-[rgba(236,253,245,0.6)]
                                ${restaurantList.restaurantId ? "" : "" }`}>
                                
            <div className={`${restaurantList.restaurantId ? "hidden" : "block"} mx-auto mb-5 w-full flex`}>
                <h2 className="mx-auto my-3 text-xl font-bold text-[#854854]">
                    Choisissez un restaurant dans la liste
                </h2>
            </div>
        <div className={`${restaurantList.restaurantId ? "" : "" } w-full mx-auto flex flex-col justify-center gap-2`}>
            <div className={`flex gap-3 justify-center items-center flex-wrap 
                ${restaurantList.restaurantId ? "hidden" : "" }`}>
                {restaurantList.restaurants.length > 0 ? restaurantList.restaurants
                .filter((restaurant:OrderingDomainModel.Restaurant) => restaurant.id)
                .map((restaurant:OrderingDomainModel.Restaurant) => (
                    <div key={restaurant.id}>
                        <RestaurantRows 
                        id={restaurant.id.toString()}
                        restaurantName={restaurant.restaurantName}
                        restaurantType={restaurant.restaurantType}
                        stars={restaurant.stars} 
                        selectRestaurant={selectRestaurant}
                        selectedRestaurantId={restaurantList.restaurantId ? restaurantList.restaurantId.toString() : ""}
                        />
                    </div>
                )) : <div className="my-5 mx-auto w-1/2 rounded px-5 py-2 ">
                        <p className="text-center font-semibold text-red-900">Aucun restaurant n&apos;est disponible</p>
                    </div>}
        </div>
        <div className="w-full mx-auto flex justify-center gap-2">
                <div className="min-h-[30px]"> 
                    {restaurantList.restaurants.length > 0 && restaurantList.restaurantId !== "" ? 
                    restaurantList.restaurants.map((restaurant: any) => {
                        return restaurant.id === restaurantList.restaurantId && 
                            (<div className=" my-5  mx-auto px-5 py-5 border-2 border-red-900 rounded"  key={restaurant.id}>
                                <p className="text-center font-semibold text-red-900 whitespace-nowrap">
                                    Le restaurant {restaurant.restaurantName} vous souhaite la bienvenue</p>
                            </div>)
                        }
                    ): null}
                </div>
            </div>
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
    console.log("selectedRestaurantId", selectedRestaurantId)
    return (
    
    <div onClick={() => selectRestaurant(id)} className={`w-full my-5 mx-auto flex gap-2`} >
            <div className={`${selectedRestaurantId === id ? "bg-red-700" : "bg-red-400"} cursor-pointer my-5 mx-3 p-5 min-w-[300px] rounded`}>
                <div className="flex flex-col gap-3 items-center justify-center">
                    <h3 className={`text-lg font-bold ${selectedRestaurantId === id ? "text-orange-300" : "text-[#854854]"}`}>{restaurantName}</h3>
                    <p className={`text-lg font-bold  ${selectedRestaurantId === id ? "text-orange-300" : "text-[#854854]"}`}>{restaurantType}</p>
                    <ul className="flex g-2">
                        {stars > 0  && stars < 7 ? [...Array(stars)].map((e, i) => <li key={i} className="text-lg font-bold text-[#854854]">⭐</li>) : null}
                    </ul>
                </div>
            </div>
    </div>
    )
}