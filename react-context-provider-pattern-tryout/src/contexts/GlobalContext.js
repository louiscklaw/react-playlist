import React from 'react';

import App from '../App';

import { ShareVars1, Context1 } from './context1';
import { ShareVars2, Context2 } from './context2';
import { ShareVars3, Context3 } from './context3';

export const GlobalContext = React.createContext();

export function GlobalContextProvider() {
  const compose = (contexts, children) =>
    contexts.reduce((acc, [Context, value]) => {
      return <Context.Provider value={value}>{acc}</Context.Provider>;
    }, children);

  return compose(
    [
      [Context1, ShareVars1()],
      [Context2, ShareVars2()],
      [Context3, ShareVars3()],
    ],
    <App />
  );

  // return (
  //   <>
  //     <GlobalContext.Provider value={{ helloworld, helloFunc }}>
  //       {children}
  //     </GlobalContext.Provider>
  //   </>
  // );
}
