import React from 'react'
import ReactDom from 'react-dom'
import { ApiProvider } from 'react-use-api'

import App from './App'

import * as serviceWorker from './serviceWorker'

const apiContext = {
  settings: {},
}

ReactDom.render(
  <React.StrictMode>
    <ApiProvider context={apiContext}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
