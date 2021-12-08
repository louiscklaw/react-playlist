import React from 'react';

export const Sibling1Context = React.createContext();

export function Sibling1ContextProvider({ children }) {
  return <Sibling1Context.Provider>{children}</Sibling1Context.Provider>;
}
