// import { useMachine } from '../path/to/useMachine';
import { useMachine } from '@xstate/react';
import { createGlassMachine } from 'src/StateMachines/glassMachine';

export default function Toggle() {
  const [current, send] = useMachine(createGlassMachine(5));

  return (
    <>
      <pre>{JSON.stringify(current, null, 2)}</pre>

      <button onClick={() => send('FILL')}>FILL</button>
      <button onClick={() => send('RESET')}>RESET</button>
      <button onClick={() => send({ type: 'RESET_TO_FILL', amount: 4 })}>
        RESET to 4
      </button>
    </>
  );
}
