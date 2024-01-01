import { OrderingDomainModel } from '@ratatouille/modules/order/core/model/ordering.domain-model';
import { IIDProvider } from '@ratatouille/modules/core/id-provider';
class StubIdProvider implements IIDProvider {
    generate() {
        return "1";
    }
}

// On hoiste nos states (intéressant pour refactor ensuite)
// Cela n'est possible que si on reste stateless 
// La class GuestForm est donc stateless sauf pour son paramètre IIDProvider qui est stateful mais on ne le changera pas (auto-discipline)
// d'où on peux se permettre de hoister cet objet
const idProvider = new StubIdProvider();
const initialEmptyState: OrderingDomainModel.RestaurantList = {    
    restaurants: [],
    restaurantId: null
}

const stateWithOneRestaurant: OrderingDomainModel.RestaurantList = {
    restaurants: [{ id:"1",
    restaurantName: 'John',
    restaurantType: 'Doe',
    stars: 0}],
    restaurantId: null
}
   
const stateWithTwoRestaurants: OrderingDomainModel.RestaurantList = {
    restaurants: [{
        id:"1",
        restaurantName: 'John',
        restaurantType: 'Doe',
        stars: 0
    },
    {
        id:"2",
        restaurantName: 'John',
        restaurantType: 'Doe',
        stars: 0
    }],
    restaurantId: null
};

