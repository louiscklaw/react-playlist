import React, {lazy, Component, Suspense} from 'react'

import './App.css';

import {importMDX} from 'mdx.macro'

const Content = lazy(() => importMDX('./Content.mdx'))

function App() {
  return (
    <div className="App">
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Content />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
