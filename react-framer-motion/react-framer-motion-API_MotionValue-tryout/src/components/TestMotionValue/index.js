import { motion, useMotionValue, useTransform } from 'framer-motion';

import './styles.css';

export default () => {
  const x = useMotionValue(0);
  const input = [-200, 0, 200];
  const output = [0, 1, 0];
  const opacity = useTransform(x, input, output);

  return (
    <div className="TestMotionValue">
      <motion.div drag="x" style={{ x, opacity }} />
    </div>
  );
};
