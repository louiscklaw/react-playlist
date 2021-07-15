import React from 'react';

import 'src/lang';

export const LangContext = React.createContext();

export function LangContextProvider({ children }) {
  return (
    <>
      <LangContext.Provider value={{}}>{children}</LangContext.Provider>
    </>
  );
}
