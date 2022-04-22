import logo from './logo.svg';
import './App.css';
import { animate, motion, useAnimation, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

import LayoutAnimation from './components/LayoutAnimation';
import ScaleCorrection from './components/ScaleCorrection';
import SharedLayoutAnimations from './components/SharedLayoutAnimations';
import TeststaggerDirection from './components/TeststaggerDirection';
import TeststaggerDirectionWhen from './components/TeststaggerDirectionWhen';
import TestSpring from './components/TestSpring';
import TestInertia from './components/TestInertia';

function App() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        // delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const staggerDirection_container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerDirection: -1,
      },
    },
  };

  const staggerDirection_item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <>
      <TestInertia />
      <TestSpring />
      <TeststaggerDirectionWhen />
      <TeststaggerDirection />

      <div className="App">
        <motion.ul variants={container} initial="hidden" animate="show">
          <motion.li variants={item} />
          <motion.li variants={item} />
        </motion.ul>

        <motion.div
          animate={{ x: 100, y: 100, opacity: 1 }}
          transition={{
            delay: 1,
            x: { type: 'spring', stiffness: 100 },
            default: { duration: 2 },
          }}
        />

        <motion.div animate={{ x: 100 }} transition={{ type: 'spring', stiffness: 100 }} />

        <text> Transition</text>
        <motion.div animate={{ x: 100 }} transition={{ delay: 1 }} />
      </div>
    </>
  );
}

export default App;
