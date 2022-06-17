import React from 'react';
import Joyride from 'react-joyride';

import './App.css';

function App() {
  let [tut_steps, setSteps] = React.useState([
    { target: '.class-helloworld-2', content: 'This is my awesome feature!' },
    { target: '.class-helloworld-4', content: 'This another !' },
    { target: '.class-helloworld-6', content: 'This is my awesome feature!' },
    { target: '.class-helloworld-8', content: 'This is my awesome feature!' },
    { target: '.class-helloworld-9', content: 'This is my awesome feature!' },
  ]);

  return (
    <div className="App">
      <Joyride steps={tut_steps} run />
      <div style={{ width: '100px', height: '100px', backgroundColor: 'pink' }}>
        <div className="class-helloworld-1">helloworld-1</div>
      </div>
      <div
        style={{ width: '100px', height: '100px', backgroundColor: 'oragen' }}>
        <div className="class-helloworld-2">helloworld-2</div>
      </div>
      <div
        style={{ width: '100px', height: '100px', backgroundColor: 'tomato' }}>
        <div className="class-helloworld-3">helloworld-3</div>
      </div>
      <div style={{ width: '100px', height: '100px', backgroundColor: 'pink' }}>
        <div className="class-helloworld-4">helloworld-4</div>
      </div>
      <div
        style={{ width: '100px', height: '100px', backgroundColor: 'oragen' }}>
        <div className="class-helloworld-5">helloworld-5</div>
      </div>
      <div
        style={{ width: '100px', height: '100px', backgroundColor: 'tomato' }}>
        <div className="class-helloworld-6">helloworld-6</div>
      </div>
      <div style={{ width: '100px', height: '100px', backgroundColor: 'pink' }}>
        <div className="class-helloworld-7">helloworld-7</div>
      </div>
      <div
        style={{ width: '100px', height: '100px', backgroundColor: 'oragen' }}>
        <div className="class-helloworld-8">helloworld-8</div>
      </div>
      <div
        style={{ width: '100px', height: '100px', backgroundColor: 'tomato' }}>
        <div className="class-helloworld-9">helloworld-9</div>
      </div>
    </div>
  );
}

export default App;
