import React, { useContext } from 'react';

import './App.css';
import { AppContext } from './AppContext';

import Highlight from './components/Highlight';

function App() {
  let { word_to_highlight, setWordToHighlight } = useContext(AppContext);
  return (
    <div className="App">
      <Highlight />
      <input
        onChange={(e) => setWordToHighlight(e.target.value)}
        value={word_to_highlight}
      />
    </div>
  );
}

export default App;
