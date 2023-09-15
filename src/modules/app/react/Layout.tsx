"use client";
import React from "react";
import { useLayout } from "@ratatouille/modules/app/react/use-layout";
import { Header } from "@ratatouille/modules/app/react/Header";
export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const presenter:any = useLayout();

  return (
    <>
      <Header />
      <section>
        {children}
      </section>
    </>
  );
};
