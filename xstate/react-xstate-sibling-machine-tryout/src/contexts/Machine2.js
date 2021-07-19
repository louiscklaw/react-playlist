import React from 'react';

import {
  STATE_INACTIVE,
  SEND_TOGGLE,
  SEND_SUSPEND,
  SEND_UNSUSPEND,
} from 'src/StateMachines/toggleMachine';

export default function Machine2({ machines }) {
  let { toggleMachine1, toggleMachine2 } = machines;
  let [current_machine1, sendMachine1] = toggleMachine1;
  let [current_machine2, sendMachine2] = toggleMachine2;

  return (
    <>
      <pre>{JSON.stringify(current_machine2, null, 2)}</pre>
      <button onClick={() => sendMachine2(SEND_TOGGLE)}>
        {current_machine2.matches(STATE_INACTIVE) ? 'inactive' : 'active'}
      </button>
      <button onClick={() => sendMachine2(SEND_SUSPEND)}>suspend</button>
      <button onClick={() => sendMachine2(SEND_UNSUSPEND)}>un_suspend</button>

      <button onClick={() => sendMachine1(SEND_TOGGLE)}>
        {current_machine1.matches(STATE_INACTIVE) ? 'inactive' : 'active'}{' '}
        machine 2
      </button>
    </>
  );
}
