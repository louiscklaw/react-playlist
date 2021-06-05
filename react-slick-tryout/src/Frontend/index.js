import React from 'react'

import FrontendDisplay from './FrontendDisplay'
import ShareContextProvider from '../Backend/context/Share'

function FrontEnd() {
  return (
    <>
      <ShareContextProvider>
        <FrontendDisplay />
      </ShareContextProvider>
    </>
  )
}

export default FrontEnd
