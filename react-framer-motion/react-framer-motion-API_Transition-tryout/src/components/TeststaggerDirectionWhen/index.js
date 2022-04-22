import { animate, motion, useAnimation, useMotionValue } from 'framer-motion';

import './styles.css';

export default () => {
  const list = {
    hidden: {
      opacity: 0,
      transition: { when: 'afterChildren' },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      transition: { duration: 2 },
    },
  };

  return (
    <div className="TeststaggerDirectionWhen">
      <text>TeststaggerDirectionWhen</text>
      <motion.ul variants={list} animate="hidden">
        <motion.li variants={item} />
        <motion.li variants={item} />
      </motion.ul>
    </div>
  );
};
