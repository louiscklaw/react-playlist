import React from 'react';
import { GlobalContext } from 'src/contexts/GlobalContext';

export default function Helloworld() {
  let { context_a, setContextA } = React.useContext(GlobalContext);
  let [a, setA] = React.useState(1);

  function testCallback(input_b, cb) {
    return cb(a, context_a);
  }

  const helloworldClick = () => {
    testCallback(6, (i_a, i_context_a) => {
      console.log('input_a', i_a);
      console.log('input_context_a', i_context_a);
    });
  };

  const updateAValue = () => {
    setA(a + 10);
    setContextA(context_a + 11);
  };

  return (
    <>
      <button onClick={helloworldClick}>helloworldClick</button>
      <button onClick={updateAValue}>updateAValue</button>
    </>
  );
}
