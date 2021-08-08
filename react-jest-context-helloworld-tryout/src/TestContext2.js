import React from 'react';

export const TestContext2 = React.createContext();

export function TestContext2Provider({ children }) {
  function helloTestContext2World() {
    console.log('helloTestContext2World');
    alert('helloTestContext2World');
  }

  return (
    <TestContext2.Provider value={{ helloTestContext2World }}>
      {children}
    </TestContext2.Provider>
  );
}
