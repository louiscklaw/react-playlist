import React from 'react';
import { useParams } from 'react-router-dom';

export const GlobalContext = React.createContext();

export function GlobalContextProvider({ children }) {
  const { id } = useParams();

  return (
    <>
      <GlobalContext.Provider>
        global {id} will cannot read the id
        {children}
      </GlobalContext.Provider>
    </>
  );
}
