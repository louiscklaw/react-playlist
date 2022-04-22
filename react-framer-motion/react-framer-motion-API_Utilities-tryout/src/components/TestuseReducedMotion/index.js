import { animate, motion, useAnimation, useMotionValue, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';

import './styles.css';

export default () => {
  const shouldReduceMotion = useReducedMotion();
  const closedX = shouldReduceMotion ? 0 : '-100%';
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 5000);
  }, []);

  return (
    <div className="TestAnimation">
      <motion.div
        animate={{
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : closedX,
        }}
      />
    </div>
  );
};
