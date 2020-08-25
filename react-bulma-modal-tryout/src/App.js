import React from 'react';

// import ThemeContextProvider from './contexts/ThemeContexts';

import ModalContextProvider from './contexts/Modals'

import OpenModalButton from './components/OpenModalButton'


function App() {

  return (
    <div className="App">
      {/* <ThemeContextProvider> */}
        <ModalContextProvider>
          <OpenModalButton />
        </ModalContextProvider>
      {/* </ThemeContextProvider> */}
    </div>
  );
}

export default App;
