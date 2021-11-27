import React from 'react';

import { useRoutes } from 'react-router-dom';
import routes from './routes';

import './App.css';

function App() {
  const routing = useRoutes(routes);

  return (
    <div className="App">
      {routing}
    </div>
  );
}

export default App;
