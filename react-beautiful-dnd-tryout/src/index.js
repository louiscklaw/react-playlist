import '@atlaskit/css-reset';

import Helloworld from 'src/components/Helloworld';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <>
      <Helloworld />
    </>
  );
}

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);
