import React from 'react';

import { AppContexts } from 'src/contexts/AppContexts';

import Toggle from 'src/components/Toggle';

function App({ test_branch = false }) {
  if (test_branch) {
    console.log('find true');
  } else {
    console.log('find false');
  }

  return (
    <div className="App">
      <AppContexts>
        <Toggle />
      </AppContexts>
    </div>
  );
}

export default App;
