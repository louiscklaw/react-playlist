import React from 'react'
import initialData from './initial-data'
import init_cc_settings from './init_cc_settings'
import init_statistics from './init_statistics'

let ShareContext = React.createContext()

export default function ShareContextProvider({ children }) {
  let [state, setState] = React.useState(initialData)
  let [cc_settings, setCcSettings] = React.useState(init_cc_settings)
  let [cc_statistics, setCcStatistics] = React.useState(init_statistics)

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
        cc_statistics,
        setCcStatistics,
      }}
    >
      {children}
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
    </ShareContext.Provider>
  )
}

export { ShareContext }
