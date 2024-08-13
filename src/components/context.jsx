import React, { createContext, useState } from "react";

// Create combined context
const AppContext = createContext();

function AppProvider({ children }) {
  const [activePage, setActivePage] = useState("Home");
  const [user, setUser] = useState({
    firstname: null,
    lastname: null,
    email: null,
    profilepic: null,
  });

  return (
    <AppContext.Provider value={{ activePage, setActivePage, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

// Export combined context and provider
export { AppContext, AppProvider };
