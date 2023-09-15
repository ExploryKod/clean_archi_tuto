// Fichier fait par moi pour le fun DONC NE RESPECTE PAS LES BONNES PRATIQUES
import { set } from 'husky';
import { useState, useEffect } from 'react';

type MyFonts = "font-mono" | "font-oswald" | "font-inter";
// Function to generate a random name
function getRandomName(names:Array<string>):string {
    var randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

export const useLayout = () => {
    // Array of fonts
    const [font, setFont] = useState<string>("Arial");
    
    useEffect(() => {
        const fonts:Array<MyFonts> = ["font-mono","font-oswald","font-inter"];
        setFont(getRandomName(fonts));
    }, []);
    return {
      font,
    }
}