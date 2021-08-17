import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

function App({ test_branch = false }) {
  let helloEmpty;

  if (test_branch) {
    console.log('find true');
  } else {
    console.log('find false');
  }

  console.log('helloEmpty', helloEmpty);

  return (
    <div className="App">
      <PerfectScrollbar>
        <div style={{ height: '100vh' }}>
          <GlobalContextProvider>
            <div
              style={{
                height: '10000px',
                width: '100000px',
                backgroundColor: 'gold',
              }}>
              helloworld
            </div>
          </GlobalContextProvider>
        </div>
      </PerfectScrollbar>
    </div>
  );
}

export default App;
