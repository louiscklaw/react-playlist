// import { useMachine } from '../path/to/useMachine';
import { useMachine } from '@xstate/react';
import {
  toggleMachine,
  STATE_INACTIVE,
  SEND_TOGGLE,
  SEND_SUSPEND,
  SEND_UNSUSPEND,
} from 'src/StateMachines/toggleMachine';

export default function Toggle() {
  const [current, send] = useMachine(toggleMachine);

  return (
    <>
      <pre>{JSON.stringify(current, null, 2)}</pre>

      <button onClick={() => send(SEND_TOGGLE)}>
        {current.matches(STATE_INACTIVE) ? 'Off' : 'On'}
      </button>

      <button onClick={() => send(SEND_SUSPEND)}>suspend</button>
      <button onClick={() => send(SEND_UNSUSPEND)}>un_suspend</button>
    </>
  );
}
