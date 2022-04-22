import logo from './logo.svg';
import './App.css';
import { animate, motion, useAnimation, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

import TestAnimation from './components/TestAnimation';
import TestViewport from './components/TestViewport';

function App() {
  return (
    <div className="App">
      <TestViewport />

      <text>TestAnimation</text>
      <TestAnimation />
    </div>
  );
}

export default App;
