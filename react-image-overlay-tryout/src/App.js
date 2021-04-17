import React from 'react';
import Overlay from 'react-image-overlay'

import './App.css';

function App() {
  return (
    <div className="App">
      <Overlay
          url='https://placeimg.com/500/500/any' // required
          overlayUrl='https://placeimg.com/150/150/any' // required
          imageHeight={500}
          imageWidth={500}
          position={'center'}
          overlayWidth={150}
          overlayHeight={150}
          overlayPadding={100}
          watermark={false}
      />

    </div>
  );
}

export default App;
