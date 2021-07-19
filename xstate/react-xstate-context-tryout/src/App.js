import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { AppContexts } from 'src/contexts/AppContexts';
import Toggle from 'src/components/Toggle';
import GlassMachine from 'src/components/GlassMachine';

function App({ test_branch = false }) {
  let helloanotherworld = '123';

  if (test_branch) {
    console.log('find true');
  } else {
    console.log('find false');
  }

  return (
    <div className="App">
      <AppContexts>
        {/* <Toggle /> */}
        <GlassMachine />
        hellocomponents
        {helloanotherworld}
      </AppContexts>
    </div>
  );
}

export default App;
