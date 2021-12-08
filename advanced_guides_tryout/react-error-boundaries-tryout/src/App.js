import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';
import ExampleApps from './components/ExampleApps';
import ErrorBoundary from './pages/FallbackUi';
import ShowPageWhenError from './pages/ShowPageWhenError';
import ResetWhenError from './pages/ResetWhenError';

function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        {/* <ShowPageWhenError>
          <h1>show page when error</h1>
          <ExampleApps />
        </ShowPageWhenError> */}

        <ResetWhenError>
          <h1>reset apps when error</h1>
          <ExampleApps />
        </ResetWhenError>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
