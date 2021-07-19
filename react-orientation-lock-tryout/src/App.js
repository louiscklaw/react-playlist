import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

function App() {
  let [show_o, setShowO] = React.useState('123');

  const checkOrientation = () => {
    if (window.matchMedia('(orientation: portrait)').matches) {
      console.log('landscape');
      setShowO('landscape');
    } else {
      console.log('portrait');
      setShowO('portrait');
    }
  };

  React.useEffect(() => {
    window.addEventListener('orientationchange', checkOrientation);
  }, []);

  return (
    <div className="App">
      <GlobalContextProvider>
        {/* <HelloComponent /> */}
        {show_o}
      </GlobalContextProvider>
    </div>
  );
}

export default App;
