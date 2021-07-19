import React from 'react';
import { useMachine } from '@xstate/react';
import { fetchMachine } from 'src/StateMachines/FetchMachine.js';

export const FetchMachineContext = React.createContext();

export function FetchMachineContextProvider({ children }) {
  const [current, send] = useMachine(fetchMachine);

  return (
    <>
      <FetchMachineContext.Provider value={{ current, send }}>
        {children}
      </FetchMachineContext.Provider>
    </>
  );
}
