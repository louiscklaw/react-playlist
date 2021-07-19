import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';
import { StateMachineExample1Provider } from 'src/contexts/StateMachineExample1';
import { GlassMachineContextProvider } from 'src/contexts/GlassMachineContext';

export function AppContexts({ children }) {
  return (
    <div className="App">
      <StateMachineExample1Provider>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </StateMachineExample1Provider>
    </div>
  );
}
