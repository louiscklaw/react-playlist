// import { useMachine } from '../path/to/useMachine';
import React from 'react';
import {
  STATE_INACTIVE,
  SEND_TOGGLE,
  SEND_SUSPEND,
  SEND_UNSUSPEND,
} from 'src/StateMachines/toggleMachine';

import { StateMachineExample1 } from 'src/contexts/StateMachineExample1';

export default function Toggle() {
  const { state, send } = React.useContext(StateMachineExample1);

  return (
    <>
      <pre>{JSON.stringify(state, null, 2)}</pre>

      <button onClick={() => send(SEND_TOGGLE)}>
        {state.matches(STATE_INACTIVE) ? 'Off' : 'On'}
      </button>

      <button
        onClick={() => {
          send(SEND_SUSPEND);
        }}
      >
        suspend
      </button>
      <button onClick={() => send(SEND_UNSUSPEND)}>un_suspend</button>
    </>
  );
}
