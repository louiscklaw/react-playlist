import { animate, motion, useAnimation, useMotionValue } from 'framer-motion';

import './styles.css';

export default () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerDirection: -1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className="TeststaggerDirection">
      <text>TeststaggerDirection</text>
      <motion.ul variants={container} initial="hidden" animate="show">
        <motion.li variants={item} size={50} />
        <motion.li variants={item} size={50} />
      </motion.ul>
    </div>
  );
};
