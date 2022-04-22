import logo from './logo.svg';
import './App.css';
import { animate, motion, useAnimation, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

import TestAnimatePresence from './components/TestAnimatePresence';

function App() {
  return (
    <div className="App">
      <text>TestAnimatePresence</text>
      <TestAnimatePresence />
    </div>
  );
}

export default App;
