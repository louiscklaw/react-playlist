import React from 'react';

import './App.css';

import FlatPickrTest from './components/flat-pickr-test';

import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";

function App() {
  let [date, setDate] = React.useState(new Date())

  return (
    <div className="App">
      <div>helloworld</div>

      <Flatpickr
        value={date}
        onChange={date => {
          setDate(date);
        }}
      />

      <div>data-enable-time</div>
      <Flatpickr
        data-enable-time
        data-enable-seconds
        value={date}
        onChange={date => {
          setDate(date);
        }}
      />

      <div>data-mode="range"</div>
      <Flatpickr
        data-mode="range"
        value={date}
        onChange={date => {
          setDate(date);
        }}
      />

    </div>
  );
}

export default App;
