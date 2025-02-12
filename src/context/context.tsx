import { createContext, useContext, useState } from "react";
import { AppContextType, ProviderType } from "./type";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: ProviderType) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleSearchValue = (value: string) => {
    setSearchValue(value);
  };

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchValue, handleSearchValue }}
    >
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
