import React from 'react';
import { GlobalContext } from 'src/contexts/GlobalContext';

export default () => {
  const { helloworld2 } = React.useContext(GlobalContext);
  const [test_hello2, setTestHello2] = React.useState('world2');

  const callTest = () => {
    console.log('callTest', 'hello2', helloworld2);
  };

  return [test_hello2, setTestHello2, callTest];
};
