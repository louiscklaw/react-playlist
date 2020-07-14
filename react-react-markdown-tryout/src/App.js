import React from 'react'
import logo from './logo.svg'
import './App.css'
import ReactMarkdown from 'react-markdown'

function App(props){
  const input = '# This is a header\n\nAnd this is a paragraph'

  return(
    <>
      <ReactMarkdown source={input} />
    </>
  )
}

export default App
