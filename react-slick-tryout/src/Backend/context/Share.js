import React from 'react'
import initialData from './initial-data'
import init_cc_settings from './init_cc_settings'

let ShareContext = React.createContext()

export default function ShareContextProvider({ children }) {
  let [state, setState] = React.useState(initialData)
  let [cc_settings, setCcSettings] = React.useState(init_cc_settings)

  let handleHelloworld = () => {
    alert('helloworld')
  }

  return (
    <ShareContext.Provider
      value={{
        handleHelloworld,
        state,
        setState,
        cc_settings,
        setCcSettings,
      }}
    >
      {children}
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
    </ShareContext.Provider>
  )
}

export { ShareContext }
