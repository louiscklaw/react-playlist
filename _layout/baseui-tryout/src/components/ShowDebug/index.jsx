import React from 'react';

export default ({ children }) => {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'gold',
          right: 0,
          bottom: 0,
        }}>
        {children}
      </div>
    </>
  );
};
