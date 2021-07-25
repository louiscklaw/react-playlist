import React from 'react';

export const GlobalContext = React.createContext();

export function GlobalContextProvider({ children }) {
  const helloworld = 'helloworld';

  let [context_a, setContextA] = React.useState(2);

  const helloFunc = () => {
    console.log('helloFunc');
  };
  return (
    <>
      <GlobalContext.Provider
        value={{ helloworld, helloFunc, context_a, setContextA }}>
        {children}
      </GlobalContext.Provider>
    </>
  );
}
