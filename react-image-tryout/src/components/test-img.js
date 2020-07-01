import React, {Suspense} from 'react'
import { PulseLoader } from 'halogenium';



function TestImgContent() {
  const src=`http://deelay.me/3000/https://picsum.photos/200`

  return ( <img src={src} /> )
}

export default TestImgContent