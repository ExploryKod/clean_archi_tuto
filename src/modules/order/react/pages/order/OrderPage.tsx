"use client";
import React from "react";
import { GuestSection } from "@ratatouille/modules/order/react/sections/GuestSection";
import { RestaurantSection } from "@ratatouille/modules/order/react/sections/RestaurantSection";
import { HeroSection } from "@ratatouille/modules/order/react/sections/HeroSection";
import { useOrderPage } from "@ratatouille/modules/order/react/pages/order/use-order-page";

export const OrderPage: React.FC = () => {
  const presenter = useOrderPage();

// attention les props ici de showGuestSection rendent sûrement le composant non réutilisable > pas clean archi
// Solution ? 
  return <main className="flex flex-col">
      <HeroSection showGuestSection={presenter.showGuestSection} />

      {!presenter.isGuestSectionVisible ||
      (<>
      <div className="pt-5 w-full min-h-[100vh] bg-gradient-to-r from-amber-200 to-yellow-500 flex flex-col gap-10">
        <RestaurantSection restaurantList={presenter.restaurantList} selectRestaurant={presenter.selectRestaurant}/>
        {!presenter.restaurantList.restaurantId || <GuestSection restaurantList={presenter.restaurantList} />}
      </div>
      <div ref={presenter.bottomRef}></div>
      </>)}
  </main>
};
