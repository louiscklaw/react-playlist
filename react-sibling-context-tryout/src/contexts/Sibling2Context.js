import React from 'react';

export const helloworld2 = () => {
  console.log('helloworld2');
};

export const Sibling2Context = React.createContext();

export function Sibling2ContextProvider({ children }) {
  return <Sibling2Context.Provider>{children}</Sibling2Context.Provider>;
}
