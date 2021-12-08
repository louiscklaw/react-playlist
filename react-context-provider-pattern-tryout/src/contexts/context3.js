import React from 'react';

import { Context2 } from './context2';

export const Context3 = React.createContext();

export function ShareVars3() {
  const [hello3, setHello3] = React.useState('hello3');
  const { hello2 } = React.useContext(Context2);

  const sampleHelloworld3 = () => {
    console.log('sampleHelloworld3');
  };

  React.useEffect(() => {
    console.log('hello2', hello2);
  }, [hello2]);

  return { hello3, setHello3, sampleHelloworld3 };
}
