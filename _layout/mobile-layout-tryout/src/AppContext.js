import React from 'react';

export const AppContext = React.createContext({});

export default ({ children }) => {
  const AppTitle = '巴士到站預報 App （免費無廣告）';

  return (
    <>
      <AppContext.Provider value={{ AppTitle }}>{children}</AppContext.Provider>
    </>
  );
};
