import React from 'react';

const BusContext = React.createContext();

function BusContextProvider({ children }) {
  return (
    <>
      <BusContext.Provider value={{ hello: 'world' }}>
        {children}
      </BusContext.Provider>
    </>
  );
}

export { BusContext, BusContextProvider };
