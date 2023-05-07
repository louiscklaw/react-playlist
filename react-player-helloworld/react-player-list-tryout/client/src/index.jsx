import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

import App from './components/App.jsx';
// import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import User from './pages/User.jsx';
import NoMatch from './pages/NoMatch.jsx';

let routes = (
  <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/:user">
      <User />
    </Route>
    <Route exact path="/">
      <App />
    </Route>
    <Route>
      <NoMatch />
    </Route>
  </Switch>
);

ReactDOM.render(
  <>
    <Router history={history}>{routes}</Router>
  </>,
  document.getElementById('root'),
);
