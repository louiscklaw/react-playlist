import React from 'react';
import 'moment/locale/ja';

import Moment from 'react-moment';
import 'moment-timezone'

import './App.css';

function App() {
  const dateToFormat = Date.now();

  return (
    <div className="App">
        {dateToFormat}
        <Moment locale="ja" fromNow>{dateToFormat}</Moment>
    </div>
  );
}

export default App;
