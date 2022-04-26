import React from 'react'
import { ShareContext } from '../Backend/context/Share'

export default function FrontendStatistics() {
  let { cc_statistics } = React.useContext(ShareContext)

  return (
    <>
      FrontendStatistics<pre>{JSON.stringify(cc_statistics)}</pre>
    </>
  )
}
