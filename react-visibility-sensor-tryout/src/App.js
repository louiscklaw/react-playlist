import React from 'react';

// const VisibilitySensor = require('react-visibility-sensr');
import VisibilitySensor from 'react-visibility-sensor'

function onChange (isVisible) {
  console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
}

function MyComponent (props) {
  return (
    <VisibilitySensor onChange={onChange}>
      <div>...content goes here...</div>
    </VisibilitySensor>
  );
}

function App() {
  return (
    <div className="App">
      helloworld
      <pre>
        yarn add react-visibility-sensor
        scroll and check the log in browser console
      </pre>

      <MyComponent />

      <div style={{height: '200vh'}}>

      </div>
    </div>
  );
}

export default App;
