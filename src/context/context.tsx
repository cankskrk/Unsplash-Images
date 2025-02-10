import { createContext, useContext, useState } from "react";
import { AppContextType, ProviderType } from "./type";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: ProviderType) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error();
  }
  return context;
};
