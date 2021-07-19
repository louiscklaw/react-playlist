import React from 'react';
import { useMachine } from '@xstate/react';

import { toggleMachine } from 'src/StateMachines/toggleMachine';

const persistedState =
  JSON.parse(localStorage.getItem('helloMachineState')) ||
  toggleMachine.initialState;

export const StateMachineExample1 = React.createContext();

export function StateMachineExample1Provider({ children }) {
  const helloworld = 'helloworld';

  const helloFunc = () => {
    console.log('helloFunc');
  };

  const [state, send] = useMachine(toggleMachine, {
    state: persistedState, // provide persisted state config object here
  });

  React.useEffect(() => {
    localStorage.setItem('helloMachineState', JSON.stringify(state));
    state.
  }, [state]);

  return (
    <>
      <StateMachineExample1.Provider
        value={{ state, send, helloworld, helloFunc }}
      >
        {children}
      </StateMachineExample1.Provider>
    </>
  );
}
