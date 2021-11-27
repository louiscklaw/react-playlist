import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Router, Route, Switch } from "react-router";

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

let Home = () => { return (<div> hello Home </div>)}
let About = () => { return (<div> hello About </div>)}
let User = () => { return (<div> hello User </div>)}
let NoMatch = () => { return (<div> hello NoMatch </div>)}

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
  <React.StrictMode>
    <Router history={history}>
      <App />
      {routes}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
