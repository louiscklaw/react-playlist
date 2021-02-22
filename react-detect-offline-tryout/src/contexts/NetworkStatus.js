import React from 'react'
import { Offline, Online, Detector } from "react-detect-offline";


export const NewtorkStatusContext = React.createContext();

export const NetworkStatusContextProvider = ({children})=>{

  return(
    <><NewtorkStatusContext.Provider >
      {children}
      <Detector
        polling={{url:`${window.location.origin}/`}}
        render={({ online }) => (
          <div className={online ? "normal" : "warning"}>
            You are currently {online ? "online" : "offline"}
          </div>
        )}
      />
    </NewtorkStatusContext.Provider>
    </>
  )
}