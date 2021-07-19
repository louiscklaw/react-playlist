import React from 'react';
import { useMachine } from '@xstate/react';

import { toggleMachine } from 'src/StateMachines/toggleMachine';

import Machine1 from './Machine1';
import Machine2 from './Machine2';

export const StateMachineContext = React.createContext();

export function StateMachineContextProvider({ children }) {
  const toggleMachine1 = useMachine(toggleMachine);
  const toggleMachine2 = useMachine(toggleMachine);

  const helloworld = 'helloworld';

  return (
    <>
      <StateMachineContext.Provider
        value={{ helloworld, toggleMachine1, toggleMachine2 }}
      >
        <div style={{ display: 'flex' }}>
          <Machine1 machine1={toggleMachine1} machine2={toggleMachine2} />
          <Machine2 machine1={toggleMachine1} machine2={toggleMachine2} />
          {children}
        </div>
      </StateMachineContext.Provider>
    </>
  );
}
