import React from 'react';

import ViewportSharedVar from './Viewport/shared_var';
import Viewport from './Viewport';

export const BusContext = React.createContext();

export default ({ children }) => {
  let [helloworld, setHelloworld] = React.useState('helloworld');

  let root_var = { helloworld, setHelloworld };
  let shared_var = { ...root_var, ...ViewportSharedVar() };

  return (
    <BusContext.Provider value={shared_var}>
      <Viewport /> {children}
    </BusContext.Provider>
  );
};
