import React, { useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';

import style from './styles.module.css';

export default () => {
  const [fullScreen, setFullScreen] = useState(false);
  const toggleFullScreen = () => setFullScreen((prevState) => !prevState);

  const handleOnClick = (i) => {
    document.querySelector('#test_id').scrollTo(0, i * 100);
  };

  return (
    <>
      <Flipper flipKey={fullScreen}>
        <Flipped flipId={'flipped_scrollable'}>
          <div
            id={'test_id'}
            style={{
              height: '300px',
              overflowY: 'scroll',
              position: 'relative',
            }}>
            {[...Array(100).keys()].map((i) => (
              <Flipped key={i} flipId={i}>
                <div
                  style={{
                    height: '100px',
                    width: '200px',
                    backgroundColor: 'gold',
                    margin: '1rem',
                  }}
                  onClick={(e) => {
                    handleOnClick(i);
                  }}>
                  {i}
                </div>
              </Flipped>
            ))}
          </div>
        </Flipped>
      </Flipper>
      <button onClick={toggleFullScreen}>toggle</button>
    </>
  );
};
