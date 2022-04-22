import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

import './styles.css';

const MyComponent = ({ isVisible }) => (
  <AnimatePresence>
    {isVisible && <motion.div key="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />}
  </AnimatePresence>
);

export default () => {
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    setTimeout(() => {
      setIsOpen(false);
    }, 10000);
  }, []);

  return (
    <div className="TestAnimation">
      <MyComponent isVisible={isOpen} />
    </div>
  );
};
