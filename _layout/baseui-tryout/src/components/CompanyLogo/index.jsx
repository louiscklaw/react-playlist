import React from 'react';

import { company_logo } from '../../assets';

export default ({}) => {
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${company_logo})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />{' '}
    </>
  );
};
