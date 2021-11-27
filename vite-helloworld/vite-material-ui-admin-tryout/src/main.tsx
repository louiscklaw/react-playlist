import React from 'react'
import ReactDOM from 'react-dom'

import { ChosenThemeProvider, ThemeProvider } from '@/providers'
import App from './App'

import { BrowserRouter } from 'react-router-dom'
// import Router from './router/Router'

ReactDOM.render(
  <React.StrictMode>
    <ChosenThemeProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ChosenThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
