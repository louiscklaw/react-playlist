import React from 'react';

import _ from 'lodash'

function App() {
  return (
    <div className="App">
      helloworld
      {JSON.stringify(_.range(20), null, 2)}
    </div>
  );
}

export default App;
