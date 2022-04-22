import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import './styles.css';

/**
 * This is an example of layout animations in Framer Motion 2.
 *
 * It's as simple as adding a `layout` prop to the `motion.div`. When
 * the flexbox changes, the handle smoothly animates between layouts.
 *
 * Try adding whileHover={{ scale: 1.2 }} to the handle - the layout
 * animation is now fully compatible with user-set transforms.
 */

export default function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <>
      <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
        <motion.div className="handle" layout transition={spring} />
      </div>
      {JSON.stringify(isOn)}
      helloworld
    </>
  );
}

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};
