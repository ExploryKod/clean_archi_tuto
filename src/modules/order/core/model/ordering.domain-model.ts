export namespace OrderingDomainModel {
    export type Form = {
        guests: Guest[],
        organizerId: string | number | null
    }

    export type Guest = {
        id: string | number, 
        firstName: string,
        lastName: string,
        age: number
    }

    export type RestaurantList = {
        restaurants: Restaurant[],
        restaurantId: string | number | null
    }

    export type Restaurant = {
        id: string | number, 
        restaurantName: string,
        restaurantType: string,
        stars: number
    }

    export enum OrderingStep {
        GUESTS = 0,
        TABLE = 1,
        MEALS = 2,
        SUMMARY = 3,
        RESERVED = 4
    }

    export type Table = {
        id: string, 
        title: string,
        capacity: number
    }
   
}