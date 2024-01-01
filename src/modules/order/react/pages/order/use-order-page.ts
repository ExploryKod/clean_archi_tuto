import { useState, useEffect, useRef, use } from 'react';

export const useOrderPage = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const bottomRef = useRef<HTMLDivElement>(null);

    const goToGuestSectionBottom = (toggle: boolean) => {
        if(bottomRef.current && toggle) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const showGuestSection = () => {
        setToggle(true);
        goToGuestSectionBottom(toggle);
    };

    useEffect(() => {
        goToGuestSectionBottom(toggle);
    }, [toggle]);

    // const hideGuestSection = () => {
    //     setToggle(false);
    // };

    return {
        isGuestSectionVisible: toggle,
        showGuestSection,
        bottomRef
    };
}