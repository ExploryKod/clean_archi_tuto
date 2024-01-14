"use client";
import React from "react";
import { useSelector } from "react-redux";
import { OrderingDomainModel } from "@taotask/modules/order/core/model/ordering.domain-model";
import { GuestSection } from "@taotask/modules/order/react/sections/guest/GuestSection";
import { RestaurantSection } from "@taotask/modules/order/react/sections/restaurant/RestaurantSection";
import { HeroSection } from "@taotask/modules/order/react/sections/hero/HeroSection";
import { useOrderPage } from "@taotask/modules/order/react/pages/order/use-order-page";
import { AppState } from "@taotask/modules/store/store";
import { MealsSection } from "@taotask/modules/order/react/sections/meals/MealsSection";
import { TableSection } from "@taotask/modules/order/react/sections/table/TableSection";
import { SummarySection } from "@taotask/modules/order/react/sections/summary/SummarySection";
import { ReservedSection } from "@taotask/modules/order/react/sections/reserved/ReservedSection";


export const OrderPage: React.FC = () => {
  const presenter = useOrderPage();
  // TODO: décomenter pour retrouver les vraies steps
  const step = useSelector((state: AppState) => state.ordering.step);
  // const step = useSelector((state: AppState) => OrderingDomainModel.OrderingStep.MEALS);
  
// attention les props ici de showGuestSection rendent sûrement le composant non réutilisable > pas clean archi
// Solution ? 

  return <main className="flex flex-col" ref={presenter.animText}>
      {!presenter.isGuestSectionVisible && <HeroSection showGuestSection={presenter.showGuestSection} />}

      {!presenter.isGuestSectionVisible ||
      (<>
      <div className="pt-5 w-full min-h-[100vh] bg-gradient-to-r from-amber-200 to-yellow-500 flex flex-col gap-10">
        <RestaurantSection restaurantList={presenter.restaurantList} selectRestaurant={presenter.selectRestaurant}/>

        {!(presenter.restaurantList.restaurantId && step === OrderingDomainModel.OrderingStep.GUESTS)
        || <GuestSection restaurantList={presenter.restaurantList} />}
        {!(presenter.restaurantList.restaurantId && step === OrderingDomainModel.OrderingStep.MEALS) || <MealsSection />}
        {!(presenter.restaurantList.restaurantId && step === OrderingDomainModel.OrderingStep.TABLE) || <TableSection />}
        {!(presenter.restaurantList.restaurantId && step === OrderingDomainModel.OrderingStep.SUMMARY) || <SummarySection />}
        {!(presenter.restaurantList.restaurantId && step === OrderingDomainModel.OrderingStep.RESERVED) || <ReservedSection />}
        
      </div>
      <div ref={presenter.bottomRef}></div>
      </>)}
  </main>
};
