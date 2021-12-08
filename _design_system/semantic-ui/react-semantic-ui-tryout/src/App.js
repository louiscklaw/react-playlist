import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

import {
  ButtonExampleButton,
  ButtonAsAhrefExampleButton,
} from 'src/components/Helloworld';

function App({ test_branch = false }) {
  return (
    <div className="App">
      <GlobalContextProvider>
        <ButtonExampleButton />
        <ButtonAsAhrefExampleButton />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
