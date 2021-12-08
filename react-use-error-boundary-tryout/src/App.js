import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

import { useErrorBoundary } from 'use-error-boundary';

const JustRenderMe = () => {
  throw new Error('💥');
};

function App({ test_branch = false }) {
  const { ErrorBoundary, didCatch, error, reset } = useErrorBoundary();

  return (
    <div className="App">
      <GlobalContextProvider>
        {didCatch ? (
          <p>An error has been caught: {error.message}</p>
        ) : (
          <ErrorBoundary>
            <JustRenderMe />
          </ErrorBoundary>
        )}
      </GlobalContextProvider>
    </div>
  );
}

export default App;
