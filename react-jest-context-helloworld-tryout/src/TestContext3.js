import React from 'react';

export const TestContext3 = React.createContext();

export function TestContext3Provider({ children }) {
  function helloTestContext3World() {
    console.log('helloTestContext3World');
    alert('helloTestContext3World');
  }

  return (
    <TestContext3.Provider value={{ helloTestContext3World }}>
      {children}
    </TestContext3.Provider>
  );
}
