import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "./context";
import LoginModal from "./loginModal";

function Header() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const { activePage } = useContext(AppContext);
  const { user } = useContext(AppContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-full justify-between items-center px-2">
      <div className="font-bold text-white">{activePage}</div>
      <div className="text-white">{time}</div>
      {user.firstname === null ? (
        <LoginModal
          className="py-[5px] px-4 border-2 border-slate-600 rounded-xl text-white bg-slate-600 
        font-bold hover:border-white hover:bg-gray-300 hover:text-black"
        />
      ) : (
        `Welcome, ${user.firstname}`
      )}
    </div>
  );
}

export default Header;
