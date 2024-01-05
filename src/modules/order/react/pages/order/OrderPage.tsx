"use client";
import React from "react";
import { GuestSection } from "@ratatouille/modules/order/react/sections/guest/GuestSection";
import { RestaurantSection } from "@ratatouille/modules/order/react/sections/restaurant/RestaurantSection";
import { HeroSection } from "@ratatouille/modules/order/react/sections/hero/HeroSection";
import { useOrderPage } from "@ratatouille/modules/order/react/pages/order/use-order-page";
import { AppState } from "@ratatouille/modules/store/store";
import { orderingStep } from "@ratatouille/modules/order/core/store/ordering.slice";
import { MealsSection } from "@ratatouille/modules/order/react/sections/meals/MealsSection";
import { TableSection } from "@ratatouille/modules/order/react/sections/table/TableSection";
import { SummarySection } from "@ratatouille/modules/order/react/sections/summary/summarySection";
import { ReservedSection } from "@ratatouille/modules/order/react/sections/reserved/reservedSection";
import { useSelector } from "react-redux";


export const OrderPage: React.FC = () => {
  const presenter = useOrderPage();
  const step = useSelector((state: AppState) => state.ordering.step);
// attention les props ici de showGuestSection rendent sûrement le composant non réutilisable > pas clean archi
// Solution ? 

  return <main className="flex flex-col">
      <HeroSection showGuestSection={presenter.showGuestSection} />

      {!presenter.isGuestSectionVisible ||
      (<>
      <div className="pt-5 w-full min-h-[100vh] bg-gradient-to-r from-amber-200 to-yellow-500 flex flex-col gap-10">
        <RestaurantSection restaurantList={presenter.restaurantList} selectRestaurant={presenter.selectRestaurant}/>
         
        {!(presenter.restaurantList.restaurantId && step === orderingStep.GUESTS) || <GuestSection restaurantList={presenter.restaurantList} />}
        {!(presenter.restaurantList.restaurantId && step === orderingStep.MEALS) || <MealsSection />}
        {!(presenter.restaurantList.restaurantId && step === orderingStep.TABLE) || <TableSection />}
        {!(presenter.restaurantList.restaurantId && step === orderingStep.SUMMARY) || <SummarySection />}
        {!(presenter.restaurantList.restaurantId && step === orderingStep.RESERVED) || <ReservedSection />}
        
      </div>
      <div ref={presenter.bottomRef}></div>
      </>)}
  </main>
};
