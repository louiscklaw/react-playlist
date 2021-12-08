import React, { useContext } from 'react';

import './App.css';
import { AppContext } from './AppContext';

import Highlight from './components/Highlight';

function App() {
  let { word_to_highlight, immed_value, setWordToHighlight } =
    useContext(AppContext);
  return (
    <div className="App">
      <Highlight />
      <input
        onChange={(e) => setWordToHighlight(e.target.value)}
        value={immed_value}
      />
    </div>
  );
}

export default App;
