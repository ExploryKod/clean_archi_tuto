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
   
}