import React from 'react';

import { Sibling1ContextProvider } from './Sibling1Context';
import { Sibling2ContextProvider } from './Sibling2Context';

import { hello1, helloworld1 } from './sibling1_shared_var';
import { helloworld2 } from './Sibling2Context';

export const GlobalContext = React.createContext();

export function GlobalContextProvider({ children }) {
  const helloworld = 'helloworld';

  const helloFunc = () => {
    console.log('helloFunc');
  };

  return (
    <>
      <GlobalContext.Provider
        value={{ hello1, helloworld, helloFunc, helloworld1, helloworld2 }}>
        <TestUseHelloworld />
        <Sibling1ContextProvider />
        <Sibling2ContextProvider />
        {children}
      </GlobalContext.Provider>
    </>
  );
}
