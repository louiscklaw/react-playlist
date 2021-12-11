import React from 'react';
import ThirdPartyLibProvider from './ThirdPartyLibProvider';

export default ({ children }) => {
  return (
    <>
      <ThirdPartyLibProvider>{children}</ThirdPartyLibProvider>
    </>
  );
};
