import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import './App.css'
import DefaultLayout from './layouts/DefaultLayout'

import Home from 'src/pages/Home'
import About from 'src/pages/About'
import Users from 'src/pages/Users'
import CheckOut from 'src/pages/CheckOut'

export default function App() {
  return (
    <Router>
      <DefaultLayout>
        <Switch>
          <Route path="/checkout">
            <CheckOut />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </DefaultLayout>
    </Router>
  )
}
