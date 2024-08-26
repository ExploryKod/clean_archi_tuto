"use client";
import React from "react";
import { Header } from "@taotask/modules/app/react/Header";
export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {


  return (
    <>
      <Header />
      <section>
        <div className="flex justify-center items-center sm:hidden p-5 w-full h-[100vh]">
          <p className="my-3 font-bold text-[#854854] text-lg">Ce site n&#39;est pas encore accessible en version mobile</p>
        </div>
        {children}
      </section>
    </>
  );
};
