import React from 'react';
import { GlobalContext } from 'src/contexts/GlobalContext';

export const Sibling2Context = React.createContext();

export function Sibling2ContextProvider({ children }) {
  let { setHelloworld2 } = React.useContext(GlobalContext);

  const helloworld2 = () => {
    console.log('helloworld2');
  };

  React.useEffect(() => {
    setHelloworld2(helloworld2);
  }, [setHelloworld2, helloworld2]);

  return <Sibling2Context.Provider>{children}</Sibling2Context.Provider>;
}
