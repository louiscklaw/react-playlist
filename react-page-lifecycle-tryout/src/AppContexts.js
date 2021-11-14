import React from 'react';

import LoadingScreen from './views/LoadingScreen';
import LocalStorageContext from './components/LocalStorageContexts';

export default AppContexts = ({ children }) => {
  return (
    <>
      <LoadingScreen>
        <LocalStorageContext>{children}</LocalStorageContext>
      </LoadingScreen>
    </>
  );
};
