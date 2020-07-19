import React from 'react';
import { ReactTinyLink } from 'react-tiny-link'

import './App.css';

function App() {
  return (
    <div className="App">
      helloworld

      <div>
        <div>cardSize=small</div>
        <ReactTinyLink
          cardSize="small"
          showGraphic={true}
          maxLine={2}
          minLine={1}
          url="https://www.google.com"
        />
      </div>

      <div>
        <div>cardSize=large</div>
        <ReactTinyLink
          cardSize="large"
          showGraphic={true}
          maxLine={10}
          minLine={1}
          url="https://www.google.com"
        />
      </div>

      <div>
        <div>showGraphic=false</div>
        <ReactTinyLink
          cardSize="large"
          showGraphic={false}
          maxLine={10}
          minLine={1}
          url="https://www.google.com"
        />
      </div>

      <div>
        <div>showGraphic=false</div>
        <ReactTinyLink
          cardSize="large"
          showGraphic={false}
          maxLine={10}
          minLine={1}
          url="https://www.google.com"
        />
      </div>

      <div>
        <div>showGraphic=false</div>
        <ReactTinyLink
          cardSize="small"
          showGraphic={true}
          maxLine={10}
          minLine={1}
          autoPlay={true}
          url="https://www.youtube.com/watch?v=eImtYyuQCZ8"
        />
      </div>

    </div>
  );
}

export default App;
