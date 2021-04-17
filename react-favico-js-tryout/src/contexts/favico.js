import React from 'react'

const Favico = require('favico.js')

export const FavicoContext = React.createContext()

export const FavicoContextProvider = ({ children }) => {
  let favicon = new Favico({
    animation: 'slide',
    position: 'up',
    bgColor: '#5CB85C',
    textColor: '#ff0',
  })
  let temp = 0

  const helloworld = () => {
  }

  const incCounter = () => {
    temp = temp + 1
    favicon.badge(temp)
  }

  const descCounter = () => {
    temp = temp - 1 < 0 ? 0 : temp - 1
    favicon.badge(temp)
  }

  const setZero = () => {
    favicon.reset()
  }

  return (
    <>
      <FavicoContext.Provider
        value={{ helloworld, incCounter, descCounter, setZero, favicon }}
      >
        <button onClick={setZero}>reset</button>
        {children}
      </FavicoContext.Provider>
    </>
  )
}
