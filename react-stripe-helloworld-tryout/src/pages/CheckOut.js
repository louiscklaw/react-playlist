import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CheckoutForm from 'src/components/CheckoutForm'

export default function CheckOut() {
  const getDonutPrice = () => {
    return 100
  }

  return (
    <h2>
      <CheckoutForm
        price={getDonutPrice(100)}
        onSuccessfulCheckout={() => Router.push('/success')}
      />
    </h2>
  )
}
