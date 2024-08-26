"use client";
import React from "react";
import { useHeader } from "@taotask/modules/app/react/use-header";

export const Header: React.FC = () => {
  const presenter = useHeader();

  return (
<nav
  className="relative flex lg:flex-wrap justify-between lg:justify-start items-center dark:bg-neutral-800 shadow-neutral-700/10 shadow-sm dark:shadow-black/30 py-2 w-full header-minh"
  data-te-navbar-ref>

  <div className="flex flex-wrap justify-between items-center px-6 w-full">
    <div className="flex items-center">
      <button
        className="block border-0 hidden bg-transparent hover:shadow-none focus:shadow-none py-2 pr-2.5 focus:ring-0 text-neutral-500 dark:text-neutral-200 hover:no-underline focus:no-underline focus:outline-none"
        type="button" data-te-collapse-init data-te-target="#navbarSupportedContentY"
        aria-controls="navbarSupportedContentY" aria-expanded="false" aria-label="Toggle navigation">
          <span>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-platter">
       <path d="M12 3V2"/><path d="M5 10a7.1 7.1 0 0 1 14 0"/><path d="M4 10h16"/><path d="M2 14h12a2 2 0 1 1 0 4h-2"/>
       <path d="m15.4 17.4 3.2-2.8a2 2 0 0 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2L5 18"/><path d="M5 14v7H2"/></svg>
       </span>
      </button>
      <a className="text-blue dark:text-blue-400" href="#!">
        <span className="[&>svg]:ml-2 [&>svg]:mr-3 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:lg:ml-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
        className="lucide lucide-hand-platter"><path d="M12 3V2"/><path d="M5 10a7.1 7.1 0 0 1 14 0"/><path d="M4 10h16"/>
        <path d="M2 14h12a2 2 0 1 1 0 4h-2"/>
        <path d="m15.4 17.4 3.2-2.8a2 2 0 0 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2L5 18"/><path d="M5 14v7H2"/></svg>
        </span>
      </a>
    </div>

    <div className="lg:!flex flex-grow items-center hidden !visible basis-[100%] lg:basis-auto"
      id="navbarSupportedContentY" data-te-collapse-item>

      <ul className="hidden lg:hidden lg:flex-row mr-auto" data-te-navbar-nav-ref>
        <li data-te-nav-item-ref>
          <a className="block lg:px-2 py-2 pr-2 text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 focus:text-neutral-600 dark:focus:text-neutral-300 [&.active]:text-black/80 dark:[&.active]:text-white/80 disabled:text-black/30 dark:disabled:text-white/30 dark:text-neutral-200 transition duration-150 ease-in-out"
            href="#!" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light"
            >Nos restaurants</a>
        </li>
        <li data-te-nav-item-ref>
          <a className="block lg:px-2 py-2 pr-2 text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 focus:text-neutral-600 dark:focus:text-neutral-300 [&.active]:text-black/80 dark:[&.active]:text-white/80 disabled:text-black/30 dark:disabled:text-white/30 dark:text-neutral-200 transition duration-150 ease-in-out"
            href="#!" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">A propos</a>
        </li>
      </ul>

    </div>

    <div className="hidden items-center my-1 lg:my-0 lg:ml-auto">
      <button type="button"
        className="inline-block hover:bg-neutral-500 dark:hover:bg-neutral-700 hover:bg-opacity-10 dark:hover:bg-opacity-60 mr-2 px-6 pt-2.5 pb-2 rounded focus:ring-0 font-medium text-primary text-xs hover:text-primary-600 dark:hover:text-primary-500 focus:text-primary-600 dark:focus:text-primary-500 active:text-primary-700 dark:active:text-primary-600 dark:text-primary-400 uppercase leading-normal transition duration-150 ease-in-out focus:outline-none"
        data-te-ripple-init data-te-ripple-color="light">
        Créer un compte
      </button>
      <button type="button"
        className="inline-block bg-[#584523] focus:bg-primary-600 active:bg-primary-700 hover:opacity-75 shadow-[0_4px_9px_-4px_#3b71ca] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] px-6 pt-2.5 pb-2 rounded focus:ring-0 font-medium text-white text-xs uppercase leading-normal transition duration-150 ease-in-out focus:outline-none"
        data-te-ripple-init data-te-ripple-color="light">
        Mon compte
      </button>
    </div>
  </div>
</nav>
  );
};




