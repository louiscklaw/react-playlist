import { useState } from 'react';

export default () => {
  let [viewport_width, setViewportWidth] = useState(window.innerWidth);
  let [viewport_height, setViewportHeight] = useState(window.innerHeight);

  return {
    viewport_width,
    setViewportWidth,
    viewport_height,
    setViewportHeight,
  };
};
