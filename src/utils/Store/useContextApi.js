import { useContext, createContext } from "react";

export const GlobalStateContext = createContext({});
export const useGlobalContext = () => useContext(GlobalStateContext);
