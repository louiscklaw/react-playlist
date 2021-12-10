import React from 'react';

import DeviceInfoSharedVar from './DeviceInfo/shared_var';

export const BusContext = React.createContext();

export default ({ children }) => {
  let root_var = {};
  let shared_var = { ...DeviceInfoSharedVar(root_var) };

  return (
    <>
      <BusContext.Provider value={shared_var}>{children}</BusContext.Provider>
    </>
  );
};
