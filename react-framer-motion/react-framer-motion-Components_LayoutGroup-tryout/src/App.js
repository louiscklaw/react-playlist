import logo from './logo.svg';
import './App.css';
import { animate, motion, useAnimation, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';
import { LayoutGroup } from 'framer-motion';

function ToggleContent({ header, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div layout onClick={() => setIsOpen(!isOpen)}>
      <motion.h2 layout>{header}</motion.h2>
      {isOpen ? content : null}
    </motion.div>
  );
}

function App() {
  return (
    <div className="App">
      <ToggleContent header="helloworld1" />
      <ToggleContent header="helloworld2" />
    </div>
  );
}

export default App;
