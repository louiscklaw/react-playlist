import React from 'react';
import {Helmet} from "react-helmet";

import './App.css';

function App() {
  return (
    <div className="App">
      helloworld
      <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

    </div>
  );
}

export default App;
