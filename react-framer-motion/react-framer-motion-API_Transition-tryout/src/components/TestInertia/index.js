import { animate, motion, useAnimation, useMotionValue } from 'framer-motion';

import './styles.css';

export default () => {
  return (
    <div className="TestInertia">
      <text>TestInertia</text>
      <motion.div animate={{ rotate: 180 }} transition={{ type: 'inertia', velocity: 50 }} />
    </div>
  );
};
