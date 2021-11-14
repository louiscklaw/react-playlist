import React, {Component} from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'

import Dashboard from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
        <Route exact path='/' component={Dashboard} />
        {/* <Route path='/project/:id' component={ProjectDetails} /> */}
        <Route path='/signin' component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
