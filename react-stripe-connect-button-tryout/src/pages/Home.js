import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function getHost(req) {
  if (!req) return ''

  const { host } = req.headers

  if (host.startsWith('localhost')) {
    return `http://${host}`
  }
  return `https://${host}`
}

export default function Home() {
  const stripeConnect = () => {
    const redirect_uri = 'http://localhost:3000/callback'
    let stripeConnectParams = {
      response_type: 'code',
      redirect_uri: redirect_uri,
      client_id: 'ca_J7NiwtCEkVJqJt3dEvYnqmvSlY2gDv1U',
      scope: 'read_write',
      'stripe_user[email]': '123@123.com',
      'stripe_user[first_name]': 'user first name',
      'stripe_user[last_name]': 'user last name',
      'stripe_user[business_type]': 'individual',
      'stripe_user[country]': 'US',
    }

    var params4 = new URLSearchParams(stripeConnectParams)
    const location = `https://connect.stripe.com/oauth/authorize?${params4.toString()}`
    console.log('helloworld', params4.toString())
    window.location.href = location
  }

  return (
    <h2>
      Home<button onClick={stripeConnect}>stripe connect button</button>
    </h2>
  )
}
