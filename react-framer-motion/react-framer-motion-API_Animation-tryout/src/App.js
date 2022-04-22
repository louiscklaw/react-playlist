import logo from './logo.svg';
import './App.css';
import { animate, motion, useAnimation, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

import LayoutAnimation from './components/LayoutAnimation';
import ScaleCorrection from './components/ScaleCorrection';
import SharedLayoutAnimations from './components/SharedLayoutAnimations';

function App() {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  const items = [1, 2, 3];

  const dynamic_variants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 3,
      },
    }),
    hidden: { opacity: 0 },
  };

  const controls = useAnimation();
  const menuControls = useAnimation();

  useEffect(() => {
    controls
      .start({
        x: '100%',
        backgroundColor: '#f00',
        transition: { duration: 3 },
      })
      .then(() => {
        menuControls.start({ x: 90, transition: { duration: 1 } });
      });
  }, []);

  let dynamic_start_controls = useAnimation();
  useEffect(() => {
    dynamic_start_controls.start((i) => ({
      opacity: 0,
      x: 100,
      transition: { delay: i * 0.3 },
    }));
  }, []);

  return (
    <div className="App">
      <text>SharedLayoutAnimations</text>
      <SharedLayoutAnimations />

      <text>ScaleCorrection</text>
      <ScaleCorrection />
      <text>Layout animations</text>
      <LayoutAnimation />
      <text>Sequencing</text>
      <motion.div animate={menuControls} />
      <text>useAnimation, Starting an animation</text>
      <motion.div animate={controls} />
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }} />
      <text>duration: 2</text>
      <motion.div animate={{ x: 100 }} transition={{ duration: 2 }} />
      <text>ease: 'easeOut', duration: 2</text>
      <motion.div animate={{ x: 100 }} transition={{ ease: 'easeOut', duration: 2 }} />
      <text>Mount animations</text>
      <motion.div animate={{ x: 100 }} initial={false} />
      <text>Keyframes</text>
      <motion.div animate={{ x: [0, 100, 0] }} />
      <motion.div cx={500} animate={{ cx: [null, 100] }} />
      <motion.div cx={500} animate={{ cx: [null, 100, 200] }} transition={{ duration: 3, times: [0, 0.2, 1] }} />
      <text>Variants</text>
      <motion.div initial="hidden" animate="visible" variants={variants} />
      <text>Propagation</text>
      <motion.ul initial="hidden" animate="visible" variants={list}>
        <motion.li variants={item} />
        <motion.li variants={item} />
        <motion.li variants={item} />
      </motion.ul>
      <text>Propagation</text>
      <motion.ul initial="hidden" animate="visible" variants={list}>
        <motion.li variants={item} />
        <motion.li variants={item} />
        <motion.li variants={item} />
      </motion.ul>
      <text>Dynamic variants</text>
      <motion.ul initial="hidden" animate="visible" variants={list}>
        {items.map((item, i) => (
          <motion.li custom={i} animate="visible" variants={dynamic_variants}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default App;
