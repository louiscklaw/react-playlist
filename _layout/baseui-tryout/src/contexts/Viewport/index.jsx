import React, { useContext, useEffect } from 'react';
import ShowDebug from '../../components/ShowDebug';
import { BusContext } from '../BusContext';

export default () => {
  let {
    viewport_width,
    viewport_height,
    setViewportWidth,
    setViewportHeight,
    viewport_width_category,
    setViewportWidthCategory,
  } = useContext(BusContext);

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

  useEffect(() => {
    let result;
    switch (true) {
      case viewport_width >= 1920:
        result = 'xl';
        break;
      case viewport_width >= 1280:
        result = 'lg';
        break;
      case viewport_width >= 960:
        result = 'md';
        break;
      case viewport_width >= 600:
        result = 'md';
        break;
      case viewport_width >= 0:
        result = 'xs';
        break;

      default:
        result = 'xs';
        break;
    }
    setViewportWidthCategory(result);
  }, [viewport_width, viewport_height]);

  return (
    <>
      <ShowDebug>
        {viewport_width},{viewport_height}
      </ShowDebug>
    </>
  );
};
