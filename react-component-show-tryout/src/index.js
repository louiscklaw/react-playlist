import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import { Router, Route, Switch } from 'react-router';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function HelloShowCount() {
  React.useEffect(() => {
    alert('hello show count');
  }, []);
  return <>HelloShowCount</>;
}

let Home = () => {
  return (
    <div>
      <div>hello Home </div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <HelloShowCount />
    </div>
  );
};
let About = () => {
  return (
    <div>
      <div>hello About</div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};
let User = () => {
  return (
    <div>
      <div>hello User</div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/test_user">User</Link>
    </div>
  );
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
  <React.StrictMode>
    <BrowserRouter history={history}>
      <App />
      {routes}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
