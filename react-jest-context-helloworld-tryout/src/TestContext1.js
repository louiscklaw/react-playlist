import React from 'react';

export const TestContext1 = React.createContext();

export function TestContext1Provider({ children }) {
  function helloTestContext1World() {
    console.log('helloTestContext1World');
    alert('helloTestContext1World');
  }

  return (
    <TestContext1.Provider value={{ helloTestContext1World }}>
      {children}
    </TestContext1.Provider>
  );
}
