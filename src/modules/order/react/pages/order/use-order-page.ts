import { useState, useEffect, useRef, use } from 'react';
import { OrderingDomainModel } from '@taotask/modules/order/core/model/ordering.domain-model';

export const useOrderPage = () => {


    const goToGuestSectionBottom = (toggle: boolean) => {
        if(bottomRef.current && toggle) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };


    const showGuestSection = () => {
        setToggle(true);
        goToGuestSectionBottom(toggle);
    };

    function displayRestaurants() {
        const newState = {
            restaurants: [
                { id:"1", restaurantName: 'Triviala', restaurantType: 'Italien', stars: 6}, 
                { id:"2", restaurantName: 'Chez Marie', restaurantType: 'Provençal', stars: 5},
                { id:"3", restaurantName: 'Chez Tom', restaurantType: 'Cuisine du Ventoux', stars: 5}],
            restaurantId: ""
        } as OrderingDomainModel.RestaurantList;
        setRestaurantList(newState);
    }

 
    function selectRestaurant(id:string) {
        setRestaurantList({...restaurantList, restaurantId: id});
    }


    const [restaurantList, setRestaurantList] = useState<OrderingDomainModel.RestaurantList>({restaurants:[], restaurantId: ""});
    const [toggle, setToggle] = useState<boolean>(false);
    const bottomRef = useRef<HTMLDivElement>(null);
 
    useEffect (() => {
        displayRestaurants();
    }, []);

    useEffect(() => {
        goToGuestSectionBottom(toggle);
    }, [toggle]);

    return {
        isGuestSectionVisible: toggle,
        showGuestSection,
        bottomRef,
        selectRestaurant,
        restaurantList
    };
}