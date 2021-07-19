// import { useMachine } from '../path/to/useMachine';
import React from 'react';
import { FetchMachineContext } from 'src/contexts/StateMachineContext';

export default function HelloComponent() {
  let { current, send } = React.useContext(FetchMachineContext);

  return (
    <>
      <pre>{JSON.stringify(current, null, 2)}</pre>
      <button
        onClick={() => {
          send('FETCH');
        }}
      >
        FETCH
      </button>
    </>
  );
}
