import React from 'react';

import { createGlassMachine } from 'src/StateMachines/glassMachine';

export const GlassMachineContext = React.createContext();

export function GlassMachineContextProvider({ children }) {
  let [machine, setMachine] = React.useState();

  const initNewMachine = (amount) => setMachine(createGlassMachine(amount));

  return (
    <>
      <GlassMachineContext.Provider value={{ initNewMachine, machine }}>
        {children}
      </GlassMachineContext.Provider>
    </>
  );
}
