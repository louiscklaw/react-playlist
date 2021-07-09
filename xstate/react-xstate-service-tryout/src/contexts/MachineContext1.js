import React from 'react';
import { useMachine } from '@xstate/react';
import { toggleMachine } from 'src/StateMachines/toggleMachine';

export let MachineContext = React.createContext();

export function MachineContextProvider({ children }) {
  const [current, send] = useMachine(toggleMachine, {
    services: { openMenu, closeMenu },
  });

  return (
    <>
      <MachineContext.Provider value={{ current, send }}>
        {children}
      </MachineContext.Provider>
    </>
  );
}
