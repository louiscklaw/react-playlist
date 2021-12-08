import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';

import { GlobalContextProvider } from 'src/contexts/GlobalContext';
import HelloworldComponent from 'src/components/HelloworldComponent';

import useHello2Test from 'src/hooks/useHello2Test';

function OuterComponent({ test_branch = false }) {
  let [test_hello2, setTestHello2, callTest] = useHello2Test();

  return <button onClick={callTest}>helloworld2.1</button>;
}

export default OuterComponent;
