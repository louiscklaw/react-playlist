import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { AppContexts } from 'src/contexts/AppContexts';

function App({ test_branch = false }) {
  if (test_branch) {
    console.log('find true');
  } else {
    console.log('find false');
  }

  return (
    <div className="App">
      <AppContexts>
        {/* <Toggle /> */}
        {/* hellocomponents */}
        {/* {helloanotherworld} */}
      </AppContexts>
    </div>
  );
}

export default App;
