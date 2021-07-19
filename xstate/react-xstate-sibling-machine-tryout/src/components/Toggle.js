import React from 'react';

import { STATE_INACTIVE, SEND_TOGGLE } from 'src/StateMachines/toggleMachine';

import { StateMachineContext } from 'src/contexts/StateMachineContext';

export default function Toggle() {
  let { toggleMachine1, toggleMachine2 } =
    React.useContext(StateMachineContext);

  let [current_machine1, sendMachine1] = toggleMachine1;
  let [current_machine2, sendMachine2] = toggleMachine2;

  return (
    <>
      <button onClick={() => sendMachine1(SEND_TOGGLE)}>
        {current_machine1.matches(STATE_INACTIVE) ? 'inactive' : 'active'}{' '}
        machine 1
      </button>
      <button onClick={() => sendMachine2(SEND_TOGGLE)}>
        {current_machine2.matches(STATE_INACTIVE) ? 'inactive' : 'active'}{' '}
        machine 2
      </button>
    </>
  );
}
