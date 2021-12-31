import React, { useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';

import style from './styles.module.css';

import helloworld_base64 from './HelloworldSVG';

const Square = ({ toggleFullScreen }) => (
  <Flipped flipId="square">
    <div
      className={style.square}
      onClick={toggleFullScreen}
      style={{
        backgroundImage: `url('${helloworld_base64}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      Square
    </div>
  </Flipped>
);

const FullScreenSquare = ({ toggleFullScreen }) => (
  <Flipped flipId="square">
    <div
      className={style.full_screen_square}
      onClick={toggleFullScreen}
      style={{
        backgroundImage: `url('${helloworld_base64}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      Fullscreen
    </div>
  </Flipped>
);

export default () => {
  const [fullScreen, setFullScreen] = useState(false);
  const toggleFullScreen = () => setFullScreen((prevState) => !prevState);

  return (
    <Flipper flipKey={fullScreen}>
      {fullScreen ? (
        <FullScreenSquare toggleFullScreen={toggleFullScreen} />
      ) : (
        <Square toggleFullScreen={toggleFullScreen} />
      )}
    </Flipper>
  );
};
