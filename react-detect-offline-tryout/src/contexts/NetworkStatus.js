import React from 'react'
import {Detector} from "react-detect-offline";

export const NetworkStatusContext = React.createContext();

export const NetworkStatusContextProvider = ({children})=>{

  return(
    <>
      <Detector
        polling={{url:`${window.location.origin}/`}}
        render={({ online }) => (
          <NetworkStatusContext.Provider value={{online:online}}>
            {children}
          </NetworkStatusContext.Provider>
        )}
      />
    </>
  )
}