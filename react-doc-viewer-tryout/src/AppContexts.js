import React from 'react';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

import App from 'src/App';

function AppContexts() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </div>
  );
}

export default AppContexts;
