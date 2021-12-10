import React from 'react';
import ThirdParyLibProvider from './ThirdParyLibProvider';

export default ({ children }) => {
  return (
    <>
      <ThirdParyLibProvider>{children}</ThirdParyLibProvider>
    </>
  );
};
