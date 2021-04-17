import React, { useState, useEffect } from 'react'
import { PaymentRequestButtonElement, useStripe } from '@stripe/react-stripe-js'

import BrowserDetection from 'react-browser-detection'

import ApplePayButton from './ApplePayButton'
import GooglePayButton from './GooglePayButton'

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe()
  const [paymentRequest, setPaymentRequest] = useState(null)
  const [clientSecret, setClientSecret] = React.useState(null)

  const options = {
    paymentRequest,
    style: {
      paymentRequestButton: {
        type: 'default',
        theme: 'dark',
        height: '64px',
      },
    },
  }

  const browserHandler = {
    chrome: () => (
      <div>
        <GooglePayButton
          onClick={e => {
            paymentRequest.show()
          }}
        />
      </div>
    ),
    safari: () => (
      <div>
        <ApplePayButton
          onClick={e => {
            paymentRequest.show()
          }}
        />
      </div>
    ),
    default: browser => (
      <div>
        louis:please tell me what browser you are using ...
        <pre>{JSON.stringify(browser, null, 2)}</pre>
      </div>
    ),
  }

  React.useEffect(() => {
    if (paymentRequest != null) {
      console.log('setup confirm card payment')
      paymentRequest.on('paymentmethod', function (ev) {
        // Confirm the PaymentIntent without handling potential next actions (yet).
        stripe
          .confirmCardPayment(
            clientSecret,
            { payment_method: ev.paymentMethod.id },
            { handleActions: false },
          )
          .then(function (confirmResult) {
            if (confirmResult.error) {
              // Report to the browser that the payment failed, prompting it to
              // re-show the payment interface, or show an error message and close
              // the payment interface.
              ev.complete('fail')
            } else {
              // Report to the browser that the confirmation was successful, prompting
              // it to close the browser payment method collection interface.
              ev.complete('success')
              // Check if the PaymentIntent requires any actions and if so let Stripe.js
              // handle the flow. If using an API version older than "2019-02-11" instead
              // instead check for: `paymentIntent.status === "requires_source_action"`.
              if (confirmResult.paymentIntent.status === 'requires_action') {
                // Let Stripe.js handle the rest of the payment flow.
                stripe.confirmCardPayment(clientSecret).then(function (result) {
                  if (result.error) {
                    // The payment failed -- ask your customer for a new payment method.
                  } else {
                    // The payment has succeeded.
                    alert('payment has succeed')
                  }
                })
              } else {
                // The payment has succeeded.
                alert('payment has succeed')
              }
            }
          })
      })
    }
  }, [paymentRequest])

  // https://stripe.com/docs/stripe-js/elements/payment-request-button#html-js-create-payment
  useEffect(() => {
    if (stripe) {
      fetch(
        'https://us-central1-react-tryout-e8aa2.cloudfunctions.net/stripe/create_payment_intent',
      )
        .then(res => res.json())
        .then(res_json => {
          setClientSecret(res_json.client_secret)
          return stripe.paymentRequest({
            country: 'JP',
            currency: 'jpy',
            total: {
              label: 'Demo total',
              amount: 50,
            },
            requestPayerName: true,
            requestPayerEmail: true,
          })
        })
        .then(pr => {
          return pr.canMakePayment().then(result => {
            if (result) {
              setPaymentRequest(pr)
            }
          })
        })
        .catch(error => {
          console.log('error on fetch ', error)
          alert('error on fetch')
        })
    }
  }, [stripe])

  if (paymentRequest) {
    return (
      <>
        <BrowserDetection>{browserHandler}</BrowserDetection>
      </>
    )
  }

  // Use a traditional checkout form.
  return 'hello louis. cardpayment'
}

export default CheckoutForm
