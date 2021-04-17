import React from 'react'
import './App.css'

import { FavicoContextProvider } from './contexts/favico'
import TestButton from './components/TestButton'

function App() {
  return (
    <div className='App'>
      <FavicoContextProvider>
        <TestButton />
      </FavicoContextProvider>
    </div>
  )
}

export default App
