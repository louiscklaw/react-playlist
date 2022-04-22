import logo from './logo.svg';
import './App.css';
import { animate, motion, useAnimation, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

import TestuseReducedMotion from './components/TestuseReducedMotion';

function App() {
  return (
    <div className="App">
      <text>TestuseReducedMotion</text>
      <TestuseReducedMotion />
    </div>
  );
}

export default App;
