import React from 'react';
import { FetchMachineContextProvider } from 'src/contexts/StateMachineContext';

export function AppContexts({ children }) {
  return (
    <div className="App">
      <FetchMachineContextProvider>
        <>{children}</>
      </FetchMachineContextProvider>
    </div>
  );
}
