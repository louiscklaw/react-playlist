import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Canvas, Circle, Text, IText, Image,Path} from 'react-fabricjs';

function App() {
  return (
    <div className="App">
      helloworld
      <Canvas
					ref="canvas"
					width="1000"
					height="1000"
				>

      </Canvas>
    </div>
  );
}

export default App;
