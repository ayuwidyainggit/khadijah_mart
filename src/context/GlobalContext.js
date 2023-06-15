import { createContext, useState } from "react";

export const GlobalContext = createContext();
// komponen provider
export const GlobalProvider = ({ children }) => {
  const [navbar, setNavbar] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        navbar: navbar,
        setNavbar: setNavbar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
