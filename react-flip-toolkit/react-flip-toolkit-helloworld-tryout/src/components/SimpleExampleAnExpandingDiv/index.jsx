import React, { useState } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";

import "./styles.css";

export default () => {
  const [fullScreen, setFullScreen] = useState(false);
  const toggleFullScreen = () => setFullScreen((prevState) => !prevState);

  return (
    <>
      <Flipper flipKey={fullScreen}>
        <Flipped flipId="square">
          <div
            className={fullScreen ? "full-screen-square1" : "square"}
            onClick={toggleFullScreen}
          />
        </Flipped>
      </Flipper>
    </>
  );
};
