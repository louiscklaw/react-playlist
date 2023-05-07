import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

import App from './components/App.jsx';

let Home = () => {
  return <div> hello Home </div>;
};
let About = () => {
  return <div> hello About </div>;
};
let User = () => {
  return <div> hello User </div>;
};
let NoMatch = () => {
  return <div> hello NoMatch </div>;
};

let routes = (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="**/about">
      <About />
    </Route>
    <Route path="/:user">
      <User />
    </Route>
    <Route>
      <NoMatch />
    </Route>
  </Switch>
);

ReactDOM.render(
  <>
    <Router history={history}>
      <App />
      {routes}
    </Router>
  </>,
  document.getElementById('root'),
);
