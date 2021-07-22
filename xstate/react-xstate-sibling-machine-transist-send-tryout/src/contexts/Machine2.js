import React from 'react';

import {
  STATE_INACTIVE,
  SEND_TOGGLE,
  SEND_SUSPEND,
  SEND_UNSUSPEND,
} from 'src/StateMachines/toggleMachine';

export default function Machine2({ machines }) {
  let { toggleMachine_one, toggleMachine_two } = machines;
  let [current_machine1, sendMachine1] = toggleMachine_one;
  let [current_machine2, sendMachine2] = toggleMachine_two;

  return (
    <>
      <div style={{ display: 'flex', flexFlow: 'column' }}>
        <pre>{JSON.stringify(current_machine2, null, 2)}</pre>
        <button onClick={() => sendMachine2('STATE_ONE')}>STATE_ONE</button>
        <button onClick={() => sendMachine2('STATE_TWO')}>STATE_TWO</button>
        <button onClick={() => sendMachine2('STATE_THREE')}>STATE_THREE</button>
      </div>
    </>
  );
}
