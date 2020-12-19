import React from 'react';
import CountUp from 'react-countup';

import './App.css';

function App() {
  return (
    <div className="App">
      helloworld
      <CountUp start={0} end={100}>
        {({ countUpRef, start }) => (
          <div>
            <span ref={countUpRef} />
            <button onClick={start}>Start</button>
          </div>
        )}
      </CountUp>
    </div>
  );
}

export default App;
