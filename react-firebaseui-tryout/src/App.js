import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'

// import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app'
import 'firebase/auth'
// import firebaseConfig from './firebaseConfig';

import { AuthProvider } from './Firebase/context'

import SignIn from './components/signin'
import Nav from './components/nav'

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router history={history}>
          <div className="App">
            <Nav />
            <Switch>
              <Route path="/signin" exact component={SignIn} />
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    )
  }
}

export default App
