import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

function App({ test_branch = false }) {
  let helloworld = 'helloworld';
  let helloanotherworld = '123';

  if (test_branch) {
    console.log('find true');
  } else {
    console.log('find false');
  }

  return (
    <div className="App">
      <GlobalContextProvider>
        {/* <HelloComponent /> */}
        <div style={{ height: '100vh', width: '100vw' }}>
          hellocomponents
          {helloanotherworld}
          <button>helloworld</button>
        </div>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
