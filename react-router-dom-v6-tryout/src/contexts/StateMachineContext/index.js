import React from 'react';
import { useMachine } from '@xstate/react';

import { toggleMachine } from 'src/StateMachines/toggleMachine';
import { AppContext } from 'src/AppContext';

export const StateMachineContext = React.createContext();

export function StateMachineContextProvider({ children }) {
  const str = window.location.href;
  const re = /\/meny\/(.*?)\/(.*?)\/(.*)/i;
  const [m, href_rest_id, menu_id] = str.match(re);

  console.log('StateMachineContextProvider', 'href_rest_id', href_rest_id);

  let { setRestId } = React.useContext(AppContext);

  const toggle_machine = useMachine(toggleMachine);

  const all_machines = { toggle_machine };

  React.useEffect(() => {}, []);

  return (
    <>
      <StateMachineContext.Provider value={{ toggle_machine, all_machines }}>
        {children}
      </StateMachineContext.Provider>
    </>
  );
}
