import React from 'react';
import { MachineContextProvider } from 'src/contexts/MachineContext1';

export function AppContexts({ children }) {
  return (
    <div className="App">
      <MachineContextProvider>{children}</MachineContextProvider>
    </div>
  );
}
