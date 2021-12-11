import React, { useContext, useEffect } from 'react';
import ShowDebug from '../../components/ShowDebug';
import { BusContext } from '../BusContext';

export default () => {
  let { viewport_width, viewport_height, setViewportWidth, setViewportHeight } =
    useContext(BusContext);

  const updateViewportInfo = () => {
    setViewportWidth(window.innerWidth);
    setViewportHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', updateViewportInfo);

    return () => {
      window.removeEventListener('resize', updateViewportInfo);
    };

    // init run
    updateViewportInfo();
  }, []);
  return (
    <>
      <ShowDebug>
        {viewport_width},{viewport_height}
      </ShowDebug>
    </>
  );
};
