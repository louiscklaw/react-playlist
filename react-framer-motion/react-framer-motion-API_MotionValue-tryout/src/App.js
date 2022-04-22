import logo from './logo.svg';
import './App.css';
import { animate, motion, useAnimation, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

import TestMotionValue from './components/TestMotionValue';
import TestViewport from './components/TestViewport';

function App() {
  return (
    <div className="App">
      <text>TestMotionValue</text>
      <TestMotionValue />
    </div>
  );
}

export default App;
