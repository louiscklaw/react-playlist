import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';

export function AppContexts({ children }) {
  return (
    <div className="App">
      <>
        <>{children}</>
      </>
    </div>
  );
}
