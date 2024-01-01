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
   
}