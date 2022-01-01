import React, { useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';

import style from './styles.module.css';

export default () => {
  const [fullScreen, setFullScreen] = useState(false);
  const toggleFullScreen = () => setFullScreen((prevState) => !prevState);

  return (
    <>
      <Flipper flipKey={fullScreen}>
        <Flipped flipId="square">
          <div
            className={fullScreen ? style.full_screen_square1 : style.square}
            onClick={toggleFullScreen}
          />
        </Flipped>
      </Flipper>
    </>
  );
};
