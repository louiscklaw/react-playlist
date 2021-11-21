import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';
import { Button } from 'rsuite';
import Sidenav from './components/Sidenav';

import { DatePicker } from 'rsuite';

import 'rsuite/dist/rsuite.min.css';

function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <Button>Hello World</Button>
        <DatePicker />
        <Sidenav />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
