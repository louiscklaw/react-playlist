import React from 'react';

import { Sibling1ContextProvider } from './Sibling1Context';
import { Sibling2ContextProvider } from './Sibling2Context';

export const GlobalContext = React.createContext();

export function GlobalContextProvider({ children }) {
  const helloworld = 'helloworld';

  let [state, setState] = React.useState();
  let [helloworld2, setHelloworld2] = React.useState();

  const helloworld1 = () => {
    console.log('helloworld1');
  };

  const helloFunc = () => {
    console.log('helloFunc');
  };

  return (
    <>
      <GlobalContext.Provider
        value={{
          helloworld,
          helloFunc,
          state,
          setState,
          helloworld1,
          helloworld2,
          setHelloworld2,
        }}
      >
        <Sibling1ContextProvider />
        <Sibling2ContextProvider />
        {children}
      </GlobalContext.Provider>
    </>
  );
}
