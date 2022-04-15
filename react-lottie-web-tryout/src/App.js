import React from 'react';
import lottie from 'lottie-web';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';
import reactLogo from './static/react-logo.json';
import RedWhiteAndBlueClock from './static/102767-red-white-and-blue-clock.json';

function App({ test_branch = false }) {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('#react-logo'),
      animationData: reactLogo,
    });

    lottie.loadAnimation({
      container: document.querySelector('#red-white-and-blue-clock'),
      animationData: RedWhiteAndBlueClock,
    });
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Hello World</h1>
        <div id="react-logo" style={{ width: 200, height: 200 }} />
      </div>
      <div>
        <h1>Hello World</h1>
        <div id="red-white-and-blue-clock" style={{ width: 200, height: 200 }} />
      </div>
    </div>
  );
}

export default App;
