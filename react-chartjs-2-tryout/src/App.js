import React from 'react';

import './App.css';

import TestDonghnut from './components/donghnut';
import TestBubble from './components/bubble';
import TestLine from './components/line';

function App() {
  return (
    <div className="App">
      chartjs tryout
      <TestLine />

      <TestDonghnut></TestDonghnut>
      <TestBubble></TestBubble>
    </div>
  );
}

export default App;
