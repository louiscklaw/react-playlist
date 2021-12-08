import React from 'react';

export const Context2 = React.createContext();

export function ShareVars2() {
  const [hello2, setHello2] = React.useState('hello2');

  const sampleHelloworld2 = () => console.log('sampleHelloworld2');

  return { hello2, setHello2, sampleHelloworld2 };
}

export function Context2Provider({ children }) {
  return <Context2.Provider>{children}</Context2.Provider>;
}
