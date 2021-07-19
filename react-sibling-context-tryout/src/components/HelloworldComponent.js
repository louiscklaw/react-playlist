import React from 'react';
import { GlobalContext } from 'src/contexts/GlobalContext';

export default function HelloworldComponent() {
  let { helloworld1, helloworld2 } = React.useContext(GlobalContext);

  return (
    <>
      <button
        onClick={() => {
          console.log(helloworld1);
        }}
      >
        helloworld1
      </button>
      <button onClick={helloworld2}>helloworld2</button>
    </>
  );
}
