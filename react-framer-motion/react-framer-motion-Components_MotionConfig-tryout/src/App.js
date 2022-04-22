import logo from './logo.svg';
import './App.css';
import { animate, motion, useAnimation, useMotionValue, MotionConfig } from 'framer-motion';
import { useEffect, useState } from 'react';
import { LayoutGroup } from 'framer-motion';

const MyComponent = ({ isVisible }) => (
  <MotionConfig transition={{ duration: 1 }}>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
  </MotionConfig>
);

function App() {
  let [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      <MyComponent isVisible={isVisible} />
    </div>
  );
}

export default App;
