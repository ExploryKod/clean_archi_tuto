export const useGuestSection = () => {

    function addGuest() {}

    function removeGuest(id:string) {}

    function updateGuest() {}

    function changeOrganizer() {}

    function onNext() {}

    function isSubmitable() {
        return false;
    }
    
    const guests:Array<any> = [{}];

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