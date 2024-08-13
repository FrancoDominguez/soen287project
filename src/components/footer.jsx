import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./context";

function Footer() {
  const { setActivePage } = useContext(AppContext);
  return (
    <div className="flex justify-center items-center py-4">
      <NavLink
        to={"disclaimer"}
        onClick={() => {
          setActivePage("Disclaimer");
        }}
        className="text-white underline"
      >
        Disclaimer
      </NavLink>
    </div>
  );
}

export default Footer;
