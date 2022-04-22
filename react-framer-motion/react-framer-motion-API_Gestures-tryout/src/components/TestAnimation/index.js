import { animate, motion, useAnimation, useMotionValue } from 'framer-motion';

import './styles.css';

export default () => {
  return (
    <div className="TestAnimation">
      <motion.div whileTap={{ scale: 0.8 }} />

      <text>TestAnimation</text>

      <motion.button
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
      />
    </div>
  );
};
