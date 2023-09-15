"use client";
import React from "react";
import { GuestSection } from "@ratatouille/modules/order/react/sections/GuestSection";
import { useOrderPage } from "@ratatouille/modules/order/react/pages/order/use-order-page";

export const OrderPage: React.FC = () => {
  const presenter = useOrderPage();
  
  return <main className="min-h-[50vh] bg-gradient-to-r from-amber-200 to-yellow-500 pt-20">
      <GuestSection />
  </main>
};
