import React from 'react';

import {NetworkStatusContext} from 'src/contexts/NetworkStatus'

export default function NetworkStatusDisplay(){
  const {online} = React.useContext(NetworkStatusContext)
  return(
    <>
      helloworld
      {JSON.stringify(online, null, 2)}
    </>
  )
}