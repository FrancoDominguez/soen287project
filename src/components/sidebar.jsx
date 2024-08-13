import React, { createContext, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "./context";

function Sidebar({ pages }) {
  const { setActivePage } = useContext(AppContext);

  return (
    <div className="mobile:border-b tablet:border-b desktop:border-none">
      <div className="flex flex-row  m-2 items-center ">
        <img src="/logo.png" className="h-[60px] w-[60px]" />
        <div className="text-white ml-2 font-bold text-2xl">PetYourPet</div>
      </div>
      <div
        className="flex px-2 mobile:pb-1 mobile:flex-row mobile:whitespace-nowrap tablet:flex-row 
      desktop:flex-col mobile:overflow-x-auto"
      >
        {pages.items.map((item, index) => (
          <NavLink
            key={index}
            to={item.href}
            onClick={() => setActivePage(item.title)}
            className="flex font-bold mobile:p-2 tablet:p-2 desktop:p-3 bg-white border-2 
            border-slate-400 mb-2 mobile:mr-1 tablet:mr-1 desktop:mx-3 items-center pl-2 
            mobile:rounded-3xl tablet:rounded-3xl desktop:rounded-md mobile:text-sm tablet:text-md 
            desktop:text-lg"
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
