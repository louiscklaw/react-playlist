// import { useMachine } from '../path/to/useMachine';
import React from 'react';
import { MachineContext } from 'src/contexts/MachineContext1';

export default function Toggle() {
  let element = React.useRef();

  let { current, send } = React.useContext(MachineContext);

  return (
    <>
      <pre>{JSON.stringify(current, null, 2)}</pre>
      <div ref={element}>element</div>

      <button onClick={() => send('OPEN')}>OPEN</button>
      <button onClick={() => send('CLOSE')}>CLOSE</button>
    </>
  );
}
