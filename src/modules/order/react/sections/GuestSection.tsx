"use client";
import React from 'react';
import { useGuestSection } from "@ratatouille/modules/order/react/sections/use-guest-section";

export const GuestSection: React.FC<{}> = () => {
    const presenter:any = useGuestSection();

    return <main className="py-[50px] mx-auto max-w-[1200px] bg-emerald-50 shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
        <div className="mx-auto mb-5 w-full flex">
            <h2 className="mx-auto my-3 text-xl font-bold text-[#854854]">Invitations</h2>
        </div>
        {presenter.guests.map((guest:any) => (
            <div key={Math.random()}>
                <GuestRows 
                id={guest.id}
                firstName={guest.firstName}
                lastName={guest.lastName}
                age={guest.age} 
                onChange={presenter.updateGuest}
                />
            </div>
             
        ))}
       
       <div className="w-full mx-auto flex justify-center gap-2">
            <button
            onClick={presenter.addGuest}
            type="submit"
            className="inline-block rounded bg-[#458236] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white 
            shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            focus:outline-none focus:ring-0 
            active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
            dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            Ajouter
            </button>
            <button
            onClick={presenter.onNext}
            type="button"
            className="inline-block rounded bg-[#478512] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white 
            shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 
            hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 
            active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
            dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
            dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            Suivant
            </button>
        </div>
    </main>
}

// const GuestButtons: React.FC<{presenter:any}> = ({presenter}) => {
    
//     return 
// }

const GuestRows: React.FC<{
    id: string,
    firstName: string,
    lastName: string,
    age: number,
    onChange: (id:string, key:string, value:string | number) => void,
}> = ({id,firstName,lastName, age, onChange}) => {
    return (
    <div className="my-5 mx-auto flex gap-2 justify-center">
            <div className="relative mb-3">
                <label className="block">
                    <span className="block text-sm font-medium text-slate-700">Prénom</span>
                        <input type="text" 
                        id="firstName"
                        placeholder="Andrew"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                        placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        value={firstName}
                        onChange= {(e) => onChange(id, "firstName", e.target.value)} 
                        />
                </label>
    
            </div>
            <div className="relative mb-3">
                <label className="block">
                    <span className="block text-sm font-medium text-slate-700">Nom</span>
                        <input type="text" 
                        id="lastName"
                        placeholder="Collins"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                        placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        value={lastName}
                        onChange= {(e) => onChange(id, "lastName", e.target.value)} 
                        />
                </label>
            </div>
            <div className="relative mb-3" data-te-input-wrapper-init>
                <label className="block">
                    <span className="block text-sm font-medium text-slate-700">Âge</span>
                        <input type="number" 
                        id="age"
                        placeholder="25"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                        placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        value={age}
                        onChange= {(e) => onChange(id, "age", parseInt(e.target.value))} 
                        />
                </label>
            </div>
        </div>
    )
}