import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import BaseUi from './BaseUi';

export default ({ children }) => {
  return (
    <>
      <BrowserRouter>
        <BaseUi>{children}</BaseUi>
      </BrowserRouter>
    </>
  );
};
