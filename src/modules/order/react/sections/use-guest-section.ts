import { set } from 'husky';
import { useState } from 'react';
// namespaces
import { OrderingDomainModel } from '@ratatouille/modules/order/core/model/ordering.domain-model';

// Function to generate a random name
function getRandomName(names:Array<string>) {
    var randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

export const useGuestSection = () => {

    // Array of names
    const firstNames:Array<string> = ["John", "Jane", "Rudy", "Doe", "Emily", "Michael", "Remy", "Marc", "Randy", "Anna"];
    const lastNames:Array<string> = ["Franssen", "Aissaoui", "Collins", "Halliwell", "Fisher", "Leluc"];

    function addGuest() {
        setGuest([
            ...guests, 
            {
            id: Math.random().toString(),
            firstName: getRandomName(firstNames),
            lastName: getRandomName(lastNames),
            age: Math.floor(Math.random() * 100)
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
    
    const [guests, setGuest] = useState<OrderingDomainModel.Guest[]>([]);

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