import React from 'react';
import { TestContext1Provider } from 'src/TestContext1';
import { TestContext2Provider } from 'src/TestContext2';
import { TestContext3Provider } from 'src/TestContext3';

export const AppContext = React.createContext();

export function AppContextProvider({ children }) {
  function helloAppContextWorld() {
    console.log('helloAppContextWorld');
    alert('helloAppContextWorld');
  }

  return (
    <AppContext.Provider value={{ helloAppContextWorld }}>
      <TestContext1Provider>
        <TestContext2Provider>
          <TestContext3Provider>{children}</TestContext3Provider>
        </TestContext2Provider>
      </TestContext1Provider>
    </AppContext.Provider>
  );
}

export default AppContext;
