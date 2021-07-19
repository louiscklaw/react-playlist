import React from 'react';
import { GlobalContext } from 'src/contexts/GlobalContext';

export const Sibling1Context = React.createContext();

export function Sibling1ContextProvider({ children }) {
  let { setHelloworld1 } = React.useContext(GlobalContext);

  const helloworld1 = () => {
    console.log('helloworld1');
  };

  return (
    <Sibling1Context.Provider value={{}}>{children}</Sibling1Context.Provider>
  );
}
