"use client";

import React from "react";
import { HeaderIcon, HeaderText } from "@/assets/icons";

export const AfterFooterSection = () => {
  return (
    <section
      className="w-full bg-white overflow-hidden p-0 m-0"
      style={{ height: "150px" }}
    >
      <div
        className="w-full px-0 sm:px-4 lg:px-16 overflow-hidden p-0 m-0"
        style={{ height: "300px" }}
      >
        <div className="flex items-center justify-center gap-0 p-0 m-0 h-full">
          <div className="flex-shrink-0">
            <HeaderIcon size={280} className="w-full sm:w-48 lg:w-80" />
          </div>

          <div className="hidden sm:flex flex-1 items-center">
            <HeaderText size={1000} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterFooterSection;
