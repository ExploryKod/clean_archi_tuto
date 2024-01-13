import { OrderingDomainModel } from '@taotask/modules/order/core/model/ordering.domain-model';
// Refactoring > Extract conditions to made these as private methods (or properties ??) to have arguments
// Condition qui return false puis true: voir si je peux pas direct return la condition (qui retourne true ou false)
export class MealForm {

    private isMealType(meal: OrderingDomainModel.Meal, type: OrderingDomainModel.MealType) {
        return meal.type === type;
    }

    private hasRequiredAge(meal: OrderingDomainModel.Meal, guest: OrderingDomainModel.Guest) {
        if(meal.requiredAge === null) {
            return true;
        }
        return guest.age >= meal.requiredAge;
    }

    getSelectableEntries(
        meals: OrderingDomainModel.Meal[],
        guest: OrderingDomainModel.Guest
    ) {
               
    return meals.filter(meal => {
            return !(
            !this.isMealType(meal, OrderingDomainModel.MealType.ENTRY) || 
            !this.hasRequiredAge(meal, guest)) 
            });
    }
}

// Before refactoring
// export class MealForm {

//     getSelectableEntries(
//         meals: OrderingDomainModel.Meal[],
//         guest: OrderingDomainModel.Guest
//     ) {
//         return meals.filter(meal => {
//             if(meal.type !== OrderingDomainModel.MealType.ENTRY) {
//                 return false;
//             }
//             if(meal.requiredAge && guest.age < meal.requiredAge) {
//                 return false;
//             }
//             return true;
//         });
//     }
// }