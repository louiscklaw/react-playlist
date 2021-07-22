import React from 'react';

import { STATE_INACTIVE, SEND_TOGGLE } from 'src/StateMachines/toggleMachine';

import { StateMachineContext } from 'src/contexts/StateMachineContext';

export default function Toggle() {
  let { toggleMachine_one, toggleMachine_two } =
    React.useContext(StateMachineContext);
  let [current_machine1, sendMachine1] = toggleMachine_one;
  let [current_machine2, sendMachine2] = toggleMachine_two;

  return (
    <>
      <div>
        <button onClick={() => sendMachine1(SEND_TOGGLE)}>
          {current_machine1.matches(STATE_INACTIVE) ? 'inactive' : 'active'}{' '}
          machine 1
        </button>
        <button onClick={() => sendMachine2(SEND_TOGGLE)}>
          {current_machine2.matches(STATE_INACTIVE) ? 'inactive' : 'active'}{' '}
          machine 2
        </button>
      </div>
    </>
  );
}
