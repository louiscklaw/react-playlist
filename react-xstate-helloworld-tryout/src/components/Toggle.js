// import { useMachine } from '../path/to/useMachine';
import { useMachine } from '@xstate/react';
import { toggleMachine, STATE_INACTIVE, SEND_TOGGLE } from './toggleMachine';

export default function Toggle() {
  const [current, send] = useMachine(toggleMachine);

  return (
    <button onClick={() => send(SEND_TOGGLE)}>
      {current.matches(STATE_INACTIVE) ? 'Off' : 'On'}
    </button>
  );
}
