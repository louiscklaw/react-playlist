import React from 'react';
import BusContextProvider from './BusContext';
import DeviceInfo from './DeviceInfo';

import ThirdPartyLibProvider from './ThirdPartyLibProvider';

export default ({ children }) => {
  return (
    <>
      <BusContextProvider>
        <DeviceInfo />
        <ThirdPartyLibProvider>{children}</ThirdPartyLibProvider>
      </BusContextProvider>
    </>
  );
};
