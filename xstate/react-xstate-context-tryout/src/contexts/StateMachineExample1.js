import React from 'react';

export const StateMachineExample1 = React.createContext();

export function StateMachineExample1Provider({ children }) {
  const helloworld = 'helloworld';

  const helloFunc = () => {
    console.log('helloFunc');
  };
  return (
    <>
      <StateMachineExample1.Provider value={{ helloworld, helloFunc }}>
        {children}
      </StateMachineExample1.Provider>
    </>
  );
}
