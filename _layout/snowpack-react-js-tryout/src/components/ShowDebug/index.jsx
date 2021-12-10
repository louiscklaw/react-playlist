import React from 'react';

export default ({ children }) => {
  return (
    <>
      <div style={{ backgroundColor: 'gold', position: 'absolute' }}>
        <pre>{children}</pre>
      </div>
    </>
  );
};
