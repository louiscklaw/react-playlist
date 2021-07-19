import React from 'react';

export const UserContext = React.createContext();

export function UserContextProvider({ children }) {
  const user = '123 user';
  return (
    <>
      <UserContext.Provider value={user}>{children}</UserContext.Provider>
    </>
  );
}
