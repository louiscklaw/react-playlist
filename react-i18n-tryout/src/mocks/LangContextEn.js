import React from 'react';

import 'src/lang/i18nForTestsEn';

export const LangContextEn = React.createContext();

export function LangContextEnProvider({ children }) {
  return (
    <>
      <LangContextEn.Provider>{children}</LangContextEn.Provider>
    </>
  );
}
