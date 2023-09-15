import { set } from 'husky';
import { useState } from 'react';

type Guest = {
    id: string, 
    firstName: string,
    lastName: string,
    age: number
}

const shuffle = (array: string[]) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
 }; 

// Function to generate a random name
function getRandomName(names:Array<string>):string {
    shuffle(names);
    let randomName:string;
     
    const randomIndex:number = Math.floor(Math.random() * names.length);
    randomName = names[randomIndex];
     
    return randomName;
}

export const useGuestSection = () => {

    // Array of names
    const firstNames:Array<string> = ["John", "Jane", "Rudy", "Doe", "Emily", "Michael", "Remy", "Marc", "Randy", "Anna"];
    const lastNames:Array<string> = ["Franssen", "Aissaoui", "Collins", "Halliwell", "Fisher", "Leluc", "Bouwman", "Fsoussi", "Poullman"];
    
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

    function openModal(id:string) {
        console.log('open modal');
        setToggle(true); 
    }

    function removeGuest(id:string) {
        setGuest(guests.filter(guest => guest.id !== id));
    }


    function updateGuest(id:string, key:string, value:number | string) {
        setGuest(guests.map(guest => guest.id === id ? {...guest, [key]: value} : guest));
    }

    function changeOrganizer() {}

    function onNext() {}

    function isSubmitable() {
        return false;
    }
    
    const [guests, setGuest] = useState<Guest[]>([]);
    const [toggle, setToggle] = useState<boolean>(false);

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