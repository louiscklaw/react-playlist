const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')

const stripe = require('stripe')(
  'sk_test_51IQlWZDzQBKP7hmY6J8HRJFydM6OBwr2rzqhgR5x9yYqXS2r7bctF5DZ4klJ4wcWHIlfk2s7VBtLlUQXNwwK727j003Lw8d3bU',
)

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const stripe_helloworld = express()
stripe_helloworld.use(cors())

stripe_helloworld.get('/create_payment_intent', async (req, res) => {
  await stripe.paymentIntents
    .create({
      amount: 50,
      currency: 'jpy',
    })
    .then(paymentIntent => {
      res.send({ client_secret: paymentIntent.client_secret })
    })
    .catch(error => {
      console.log('error', error)
      console.log('error during create payment intent')
    })
})

stripe_helloworld.get('/', async (req, res) => {
  res.send({ hello: 'stripe_helloworld' })
})

exports.stripe = functions.https.onRequest(stripe_helloworld)

exports.create_payment_intent = functions.https.onRequest(async (request, response) => {
  const stripe = require('stripe')(
    'sk_test_51IQlWZDzQBKP7hmY6J8HRJFydM6OBwr2rzqhgR5x9yYqXS2r7bctF5DZ4klJ4wcWHIlfk2s7VBtLlUQXNwwK727j003Lw8d3bU',
  )

  await stripe.paymentIntents
    .create({
      amount: 1099,
      country: 'JP',
      currency: 'jpy',
    })
    .then(paymentIntent => {
      response.send({ client_secret: paymentIntent.client_secret })
    })
    .catch(error => {
      console.log('error during create payment intent')
    })
})

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true })
  response.send('Hello from Firebase!')
})
