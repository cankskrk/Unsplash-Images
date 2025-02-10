import { createContext, useContext } from "react";
import { AppContextType, ProviderType } from "./type";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: ProviderType) => {
  const greeting = "Hello";
  return (
    <AppContext.Provider value={{ greeting }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error();
  }
  return context;
};
