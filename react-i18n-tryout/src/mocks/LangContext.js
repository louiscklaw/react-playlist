import React from 'react';

import 'src/lang/i18nForTestsZh';

export const LangContext = React.createContext();

export function LangContextProvider({ children }) {
  return (
    <>
      <LangContext.Provider>{children}</LangContext.Provider>
    </>
  );
}
