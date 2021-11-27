import React from 'react';

import { GlobalContextProvider } from './GlobalContext';

export default function AppContext({ children }) {
  return (
    <>
      <GlobalContextProvider>{children}</GlobalContextProvider>
    </>
  );
}
