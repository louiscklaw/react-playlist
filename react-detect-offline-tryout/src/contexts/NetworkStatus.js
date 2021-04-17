import React from 'react';
import { Detector } from 'react-detect-offline';

export const NetworkStatusContext = React.createContext();

export const NetworkStatusContextProvider = ({ url, children }) => {
  return (
    <>
      <Detector
        polling={{ url: url }}
        render={({ online }) => (
          <NetworkStatusContext.Provider value={{ online: online }}>
            {children}
          </NetworkStatusContext.Provider>
        )}
      />
    </>
  );
};
