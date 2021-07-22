import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';
import { StateMachineContextProvider } from 'src/contexts/StateMachineContext';

export function AppContexts({ children }) {
  return (
    <GlobalContextProvider>
      <StateMachineContextProvider>{children}</StateMachineContextProvider>
    </GlobalContextProvider>
  );
}
