import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Loading from 'react-loading-spinkit'

class App extends Component {
  render() {
    return (
      <div style={{ height: '100vh', width: '100vw' }}>
        <Loading show={true} />
      </div>
    )
  }
}

export default App
