import React from 'react';
import LazyImage from 'react-lazy-blur-image';

import './App.css';

function App() {
  return (
    <>
      <div className="App">
        helloworld
      </div>
      <LazyImage
        placeholder={'https://picsum.photos/200/300'}
        uri={'https://picsum.photos/200/300'}
        render={(src, style) => <img src={src} style={style} />}
      />

    </>
  );
}

export default App;
