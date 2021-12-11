import React from 'react';

export default ({ children }) => {
  return (
    <>
      <div style={{ position: 'absolute', backgroundColor: 'gold' }}>
        {children}
      </div>
    </>
  );
};
