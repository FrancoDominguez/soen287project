import React, { createContext, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "./context";

function Sidebar({ pages }) {
  const { setActivePage } = useContext(AppContext);

  return (
    <div className="">
      <div className="flex flex-row m-2 items-center">
        <img src="logo.png" className="h-[60px] w-[60px]" />
        <div className="text-white ml-2 font-bold text-2xl">PetYourPet</div>
      </div>
      <div className="flex flex-col px-2">
        {pages.items.map((item, index) => (
          <NavLink
            key={index}
            to={item.href}
            onClick={() => setActivePage(item.title)}
            className="flex p-3 h-min bg-white border-2 border-slate-400 mb-2 mx-2 items-center 
            pl-2 rounded-md text-lg"
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
