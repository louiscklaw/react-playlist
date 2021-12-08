import React from 'react';

export const Context1 = React.createContext();

export function ShareVars1() {
  const share_vars = React.useState('hello1');

  return share_vars;
}

export function Context1Provider({ children }) {
  return <Context1.Provider>{children}</Context1.Provider>;
}
