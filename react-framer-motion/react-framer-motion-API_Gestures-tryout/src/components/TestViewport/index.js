import { animate, motion, useAnimation, useMotionValue } from 'framer-motion';

import './styles.css';

export default () => {
  return (
    <>
      <text>TestViewport</text>
      <div className="TestViewport">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} />
      </div>
    </>
  );
};
