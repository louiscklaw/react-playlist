import React from 'react'
import ReactDOM from 'react-dom'

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import CheckoutForm from './CheckoutForm'

import * as serviceWorker from './serviceWorker'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY)

function App() {
  return (
    <Elements stripe={stripePromise}>
      <pre>{JSON.stringify(process.env.REACT_APP_PUBLISHABLE_KEY, null, 2)}</pre>
      <div>hello louis</div>

      <div>JPY 50</div>
      <CheckoutForm amount={50} />
    </Elements>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
