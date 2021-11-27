import React from 'react';

import Util from './contexts/Util';
import BusContext from './contexts/BusContext';

export default function AppContext({ children }) {
  return (
    <>
      <Util>
        <BusContext>{children}</BusContext>
      </Util>
    </>
  );
}
