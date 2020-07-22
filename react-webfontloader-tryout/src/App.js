import React from 'react';
import WebFont from 'webfontloader';

import './App.css';

function App() {


  WebFont.load({
    google: {
      families: ['Droid Sans', 'Droid Serif','Raleway','Noto Sans TC']
    }
  });

  return (
    <>

      <div className="App">
          default fonts

        <div>
          helloworld
        </div>

      </div>

      <div className="section">
        default

        <div>
          母接。為應樣社洋也加一業未太……
        </div>
        <div>
          helloworld
        </div>
      </div>

      <div className="section">
        Droid Serif

        <div className="font-droid-serif">
          Droid Serif helloworld
        </div>
      </div>

      <div className="section">
        Droid Sans
        <div className="font-droid-sans">
          Droid Sans helloworld
        </div>
      </div>

      <div className="section">
        font-noto-sans-tc
        <div className="font-noto-sans-tc">
          母接。為應樣社洋也加一業未太……
        </div>
      </div>

      <div className="section">
        font-noto-sans-tc
        <div className="font-raleway">
          raleway helloworld
        </div>
      </div>



    </>
  );
}

export default App;
