import React from 'react';
import { useStyletron } from 'baseui';
import { Grid, Cell, BEHAVIOR } from 'baseui/layout-grid';

import { logo1 } from '../../assets';

export default () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${logo1})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',

          height: '200px',
          width: '200px',
        }}
      />
    </>
  );
};
