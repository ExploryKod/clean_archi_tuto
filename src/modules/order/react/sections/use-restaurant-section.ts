import { useState, useRef } from 'react';
import { useDependencies } from '@ratatouille/modules/app/react/DependenciesProvider';
import { OrderingDomainModel } from '@ratatouille/modules/order/core/model/ordering.domain-model';

export const useRestaurantSection = () => {
        
    function displayRestaurants() {
        const newState = {
            restaurants: [
                { id:"1", restaurantName: 'Triviala', restaurantType: 'Italien', stars: 6}, 
                { id:"1", restaurantName: 'Chez Marie', restaurantType: 'Provençal', stars: 5}],
            restaurantId: null
        } as OrderingDomainModel.RestaurantList;
        setRestaurantList(newState);
    }

    const [restaurantList, setRestaurantList] = useState<OrderingDomainModel.RestaurantList>({restaurants:[], restaurantId: null});
    return {
      restaurantList,
      displayRestaurants
    }
}