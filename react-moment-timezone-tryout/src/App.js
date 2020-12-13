import React from 'react';

import Moment from 'react-moment';
import 'moment-timezone'

import './App.css';

function App() {
  const dateToFormat = Date.now();

  return (
    <div className="App">

      <Moment>{dateToFormat}</Moment>
    </div>
  );
}

export default App;
