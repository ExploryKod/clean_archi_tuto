import { set } from 'husky';
import { useState } from 'react';

type Guest = {
    id: string, 
    firstName: string,
    lastName: string,
    age: number
}

export const useGuestSection = () => {

    function addGuest() {
        setGuest([
            ...guests, 
            {
            id: Math.random().toString(),
            firstName: 'Agnès',
            lastName: 'Bassinaro',
            age: 0
            }
        ]);
    }

    function removeGuest(id:string) {
        setGuest(guests.filter(guest => guest.id !== id));
    }

    function updateGuest(id:string, key:string, value:number | string) {
        console.log('update guest');
    }

    function changeOrganizer() {}

    function onNext() {}

    function isSubmitable() {
        return false;
    }
    
    const [guests, setGuest] = useState<Guest[]>([]);

    return {
        addGuest,
        removeGuest,
        updateGuest,
        onNext,
        changeOrganizer,
        isSubmitable: isSubmitable(),
        guests
    }
}