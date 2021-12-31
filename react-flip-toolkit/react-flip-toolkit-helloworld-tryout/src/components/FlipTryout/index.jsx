import React, { useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';

import './styles.css';

const Square = ({ toggleFullScreen }) => (
  <Flipped flipId="square">
    <div className="square" onClick={toggleFullScreen}>
      Square
    </div>
  </Flipped>
);

const FullScreenSquare = ({ toggleFullScreen }) => (
  <Flipped flipId="square">
    <div className="full-screen-square_a" onClick={toggleFullScreen}>
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