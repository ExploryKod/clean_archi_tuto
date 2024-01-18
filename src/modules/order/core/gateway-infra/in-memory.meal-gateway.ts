import { IMealGateway } from "@taotask/modules/order/core/gateway/meal.gateway";
import { OrderingDomainModel } from "@taotask/modules/order/core/model/ordering.domain-model";
import { MealFactory } from "@taotask/modules/order/core/model/meal.factory";
// Ecrire ces plats ici ne suffira pas >> encore faudra t-il un usecase (usecase: fetch-meals)
export class InMemoryMealGateway implements IMealGateway {
    async getMeals(): Promise<OrderingDomainModel.Meal[]> {
        return [
            MealFactory.create({
                id: '1',
                title: 'Raita de concombre',
                type: OrderingDomainModel.MealType.ENTRY,
                price: 3.5,
                requiredAge: 0,
            }),
            {id: '1', title: 'Tiramisu Alcoolisé', type: OrderingDomainModel.MealType.DESSERT, requiredAge:18, price: 5},
            {id: '2', title: 'Tiramisu', type: OrderingDomainModel.MealType.DESSERT, requiredAge:1, price: 5},
            {id: '3', title: 'Hamburger', type: OrderingDomainModel.MealType.MAIN_COURSE, requiredAge:1, price: 5},
            {id: '4', title: 'Weed confit', type: OrderingDomainModel.MealType.MAIN_COURSE, requiredAge:18, price: 5},
            {id: '5', title: 'Raita', type: OrderingDomainModel.MealType.ENTRY, requiredAge:1, price: 5},
            {id: '6', title: 'Raita alcoolisée', type: OrderingDomainModel.MealType.ENTRY, requiredAge:18, price: 5},
            {id: '7', title: 'Rhum', type: OrderingDomainModel.MealType.DRINK, requiredAge:18, price: 5},
            {id: '8', title: 'Jus D\'Orange', type: OrderingDomainModel.MealType.DRINK, requiredAge:1, price: 5}
        ]
        
    }
}