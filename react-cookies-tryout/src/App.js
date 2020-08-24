import React from 'react';
import { CookiesProvider } from 'react-cookie';

import TestComp1 from './components/TestComp1';

import './App.css';

function App() {
  return (
    <CookiesProvider>
      <TestComp1></TestComp1>
    </CookiesProvider>
  );
}

export default App;
