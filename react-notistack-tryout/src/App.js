import React from 'react';

import { GlobalContextProvider } from 'src/contexts/GlobalContext';

import { SnackbarProvider } from 'notistack';

import { UserContext } from './UserContext';
import UserGreeter from './UserGreeter';

function App({ test_branch = false }) {
  let hello_another_world = '123';

  if (test_branch) {
    console.log('find true');
  } else {
    console.log('find false');
  }

  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
        <GlobalContextProvider>
          {hello_another_world}
          <UserContext.Provider value={null}>
            <UserGreeter />
          </UserContext.Provider>
        </GlobalContextProvider>
      </SnackbarProvider>
    </div>
  );
}

export default App;
