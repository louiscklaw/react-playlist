import React from 'react';
import ThirdPartyLibProvider from './ThirdPartyLibProvider';

import BusContext from './BusContext';

export default ({ children }) => {
  return (
    <>
      <ThirdPartyLibProvider>
        <BusContext>{children}</BusContext>
      </ThirdPartyLibProvider>
    </>
  );
};
