import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(
  'pk_test_51IR3dcFBIXj9AS8VMhc4PTNeUk3NOjYdaOtP7oTJ4V1KiWfJmJM4Xhd5PJ35AN9lZZw0eQeZbAF9j1NZDrzTyYL100iLiPJ8de',
)

export default function DefaultLayout({ children }) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/checkout">CheckOut</Link>
          </li>
        </ul>
      </nav>
      <Elements stripe={stripePromise}>{children}</Elements>
    </>
  )
}
