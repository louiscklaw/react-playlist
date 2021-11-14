import React from 'react';

export const LocalStorageContext = React.createContext();
export function LocalStorageProvider({ children }) {
  let [is_loading, setIsLoading] = React.useState(true);
  return (
    <>
      <LocalStorageContext.Provider value={is_loading}>
        <button onClick={(e) => setIsLoading(false)}>done</button>
        {children}
      </LocalStorageContext.Provider>
    </>
  );
}
