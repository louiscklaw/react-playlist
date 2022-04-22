import { animate, motion, useAnimation, useMotionValue } from 'framer-motion';

import './styles.css';

export default () => {
  return (
    <div className="TestSpring">
      <text>TestSpring</text>

      <motion.div animate={{ rotate: 180 }} transition={{ type: 'spring', mass: 0.5 }} />
    </div>
  );
};
