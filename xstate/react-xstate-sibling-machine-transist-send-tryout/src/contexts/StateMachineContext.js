import React from 'react';

import { useMachine } from '@xstate/react';

import { toggleMachine1 } from 'src/StateMachines/toggleMachine1';
import { toggleMachine2 } from 'src/StateMachines/toggleMachine2';

import Machine1 from './Machine1';
import Machine2 from './Machine2';

import updateByToggle1Machine from './updateByToggle1Machine';

export const StateMachineContext = React.createContext();

export function StateMachineContextProvider({ children }) {
  const toggleMachine_one = useMachine(toggleMachine1);
  const toggleMachine_two = useMachine(toggleMachine2);

  const [current_toggle_1, sendToggle1] = toggleMachine_one;
  const [current_toggle_2, sendToggle2] = toggleMachine_two;

  const helloworld = 'helloworld';

  React.useEffect(() => {
    updateByToggle1Machine(current_toggle_1, sendToggle2);
  }, [current_toggle_1]);

  return (
    <>
      <StateMachineContext.Provider
        value={{
          helloworld,
          toggleMachine_one,
          toggleMachine_two,
        }}
      >
        <div style={{ display: 'flex' }}>
          <Machine1
            machines={{
              toggleMachine_one,
              toggleMachine_two,
            }}
          />
          <Machine2
            machines={{
              toggleMachine_one,
              toggleMachine_two,
            }}
          />
          {children}
        </div>
      </StateMachineContext.Provider>
    </>
  );
}
