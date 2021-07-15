import React from 'react';

import 'src/lang/i18nForTestsZh';

export const LangContextZh = React.createContext();

export function LangContextZhProvider({ children }) {
  return (
    <>
      <LangContextZh.Provider>{children}</LangContextZh.Provider>
    </>
  );
}
