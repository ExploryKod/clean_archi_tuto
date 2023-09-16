"use client";
import React from "react";
import { Header } from "@ratatouille/modules/app/react/Header";
export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {


  return (
    <>
      <Header />
      <section>
        {children}
      </section>
    </>
  );
};
