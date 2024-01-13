// Etape qui suit celle de la finition de l'UI = presenter du composant react meal 
// Il y a des select (tuto) mais chez moi c un slider avec des sélection de cards de repas (dans un form)
// On reprend les fonction du presenter pour entamer les tests
//  Sauf qu'on a besoin de repas >> on va donc créer le meal.factory.ts (model)
//  On a besoin de quoi ? D'une part des plats et d'autre part des utilisateurs 
//  On va donc créer une méthode dans la class MealForm de meal.form.ts qui va nous permettre de créer des plats avec un guest associé (getSelectableEntries ....)

import { MealForm } from "@taotask/modules/order/core/form/meal.form";
import { GuestFactory } from "@taotask/modules/order/core/model/guest.factory";
import { MealFactory } from "@taotask/modules/order/core/model/meal.factory";
import { OrderingDomainModel } from "@taotask/modules/order/core/model/ordering.domain-model";

// Etant sur du stateless on peux se créer un formulaire à l'extérieur: instanciation de la class MealForm
const mealForm = new MealForm();

// Création de 2 type de guest (enfant / adulte) pour les tests

const adult = GuestFactory.create(
    {id:"1", firstName:"Randolf", lastName:"Verrin", age: 56, 
    meals: {entry: null, mainCourse: null, dessert: null, drink: null}
});

const child = GuestFactory.create({
    id: '2',
    firstName: 'Arnaud',
    lastName: 'Dupont',
    age: 12,
    meals: {entry: null,mainCourse: null,dessert: null,drink : null}
});

// Création de plats pour les tests

const adultDessert = MealFactory.create(
    {id: '1', title: 'Tiramisu Alcoolisé', type: OrderingDomainModel.MealType.DESSERT, requiredAge:18, price: 5}
); 

const regularDessert = MealFactory.create(
    {id: '2', title: 'Tiramisu', type: OrderingDomainModel.MealType.DESSERT, requiredAge:1, price: 5}
); 

const regularMainCourse = MealFactory.create(
    {id: '3', title: 'Hamburger', type: OrderingDomainModel.MealType.MAIN_COURSE, requiredAge:1, price: 5}
); 

const adultMainCourse = MealFactory.create(
    {id: '4', title: 'Weed confit', type: OrderingDomainModel.MealType.MAIN_COURSE, requiredAge:18, price: 5}
); 

const regularEntry = MealFactory.create(
    {id: '5', title: 'Raita', type: OrderingDomainModel.MealType.ENTRY, requiredAge:1, price: 5}
); 

const adultEntry = MealFactory.create(
    {id: '6', title: 'Raita alcoolisée', type: OrderingDomainModel.MealType.ENTRY, requiredAge:18, price: 5}
); 

const adultDrink = MealFactory.create(
    {id: '7', title: 'Rhum', type: OrderingDomainModel.MealType.DRINK, requiredAge:18, price: 5}
); 

const regularDrink = MealFactory.create(
    {id: '8', title: 'Jus D\'Orange', type: OrderingDomainModel.MealType.DRINK, requiredAge:1, price: 5}
); 

const meals: OrderingDomainModel.Meal[] = [
    regularMainCourse,
    adultMainCourse,
    regularEntry,
    adultEntry,
    adultDessert,
    regularDessert,
    adultDrink,
    regularDrink
];

describe('Selecting Meals', () => {
    describe('When selecting an entry', () => {
        //Anatomy du each: it.each([])('', () => {})
        it.each([
            {meals: [], guest: adult, expected: []},
            {meals, guest: adult, expected: [regularEntry,adultEntry]},
            {meals, guest: child, expected: [regularEntry]},

        ])(``, ({meals, guest, expected}) => {
            const result = mealForm.getSelectableEntries(meals, guest);
            expect(result).toEqual(expected);
        })
        // it.each do the same as this:
        // it('should return an empty array if no meals is providing', () => {
        //     const result = mealForm.getSelectableEntries([], adult);
        //     expect(result).toEqual([]);
        // });
        // it('when meals entries are available, it should return all meals entries', () => {
        //     const result = mealForm.getSelectableEntries(meals, adult);
        //     expect(result).toEqual([regularEntry, adultEntry]);
        // });
        // it('when meals entries are available and guest are children, it should return children meals entries', () => {
        //     const result = mealForm.getSelectableEntries(meals, child);
        //     expect(result).toEqual([regularEntry]);
        // });
        // Aprés avoir créer getSelectableEntries avec les bon retour, on a refactor à ce stade.
    
    });

    describe('When selecting a main course', () => {
        //Anatomy du each: it.each([])('', () => {})
        it.each([
            {meals: [], guest: adult, expected: []},
            {meals, guest: adult, expected: [regularMainCourse,adultMainCourse]},
            {meals, guest: child, expected: [regularMainCourse]},

        ])(``, ({meals, guest, expected}) => {
            const result = mealForm.getSelectableMainCourse(meals, guest);
            expect(result).toEqual(expected);
        })
    });

    describe('When selecting a dessert', () => {
        //Anatomy du each: it.each([])('', () => {})
        it.each([
            {meals: [], guest: adult, expected: []},
            {meals, guest: adult, expected: [adultDessert, regularDessert]},
            {meals, guest: child, expected: [regularDessert]},

        ])(``, ({meals, guest, expected}) => {
            const result = mealForm.getSelectableDessert(meals, guest);
            expect(result).toEqual(expected);
        })
    });

    describe('When selecting a drink', () => {
        //Anatomy du each: it.each([])('', () => {})
        it.each([
            {meals: [], guest: adult, expected: []},
            {meals, guest: adult, expected: [adultDrink, regularDrink]},
            {meals, guest: child, expected: [regularDrink]},

        ])(``, ({meals, guest, expected}) => {
            const result = mealForm.getSelectableDrink(meals, guest);
            expect(result).toEqual(expected);
        })
    });
});