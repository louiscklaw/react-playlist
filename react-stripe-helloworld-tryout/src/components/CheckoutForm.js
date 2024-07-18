import React from 'react'

import { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
// import axios from 'axios'

import './style.css'

const CardElementContainer = ({ children }) => {
  return <div id="CardElementContainer">{children}</div>
}

const BillingDetailsFields = () => {
  return <></>
}

const Row = ({ children }) => {
  return <>{children}</>
}

const CheckoutForm = ({ price, onSuccessfulCheckout }) => {
  const [isProcessing, setProcessingTo] = useState(false)
  const [checkoutError, setCheckoutError] = useState()

  const stripe = useStripe()

  const handleFormSubmit = () => {}

  const iframeStyles = {
    base: {
      color: '#fff',
      fontSize: '16px',
      iconColor: '#fff',
      '::placeholder': {
        color: '#87bbfd',
      },
    },
    invalid: {
      iconColor: '#FFC7EE',
      color: '#FFC7EE',
    },
    complete: {
      iconColor: '#cbf4c9',
    },
  }
  const cardElementOpts = {
    iconStyle: 'solid',
    style: iframeStyles,
    hidePostalCode: true,
  }

  const handleCardDetailsChange = ev => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError()
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <Row>
        <BillingDetailsFields />
      </Row>
      <Row>
        <CardElementContainer>
          <CardElement options={cardElementOpts} onChange={handleCardDetailsChange} />
        </CardElementContainer>
      </Row>
      {checkoutError}
      <Row>
        {/* TIP always disable your submit button while processing payments */}
        {/* <button disabled={isProcessing || !stripe}>
          {isProcessing ? 'Processing...' : `Pay $${price}`}
        </button> */}
        <button>{isProcessing ? 'Processing...' : `Pay $${price}`}</button>
      </Row>
    </form>
  )
}

export default CheckoutForm
