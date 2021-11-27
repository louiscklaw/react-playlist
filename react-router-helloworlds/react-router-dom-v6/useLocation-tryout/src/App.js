import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, useLocation } from 'react-router-dom';

import InsideSwitch from './components/InsideSwitch';

export default function App() {
  return (
    <Router>
      <Switch>
        <InsideSwitch />
      </Switch>
    </Router>
  );
}
