import React, { useState } from "react";
import { GlobalStateContext } from "./useContextApi";

export const ContextManager = ({ children }) => {
  const [cityList, setCityList] = useState([]);

  return (
    <GlobalStateContext.Provider value={{ cityList, setCityList }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
