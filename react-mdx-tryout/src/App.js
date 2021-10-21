import React, { Suspense } from 'react';

import Content from 'src/components/Content';

import 'src/App.css';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading ...</div>}>
        <Content />
      </Suspense>
    </div>
  );
}

export default App;
