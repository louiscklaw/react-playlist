import React from 'react'
import initialData from './initial-data'

let ShareContext = React.createContext()

export default function ShareContextProvider({ children }) {
  let [state, setState] = React.useState(initialData)

  let handleHelloworld = () => {
    alert('helloworld')
  }

  return (
    <ShareContext.Provider
      value={{
        handleHelloworld,
        state,
        setState,
      }}
    >
      {children}
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
    </ShareContext.Provider>
  )
}

export { ShareContext }
