import React, {Suspense} from 'react'
import {useImage} from 'react-image'
import { PulseLoader } from 'halogenium';

function TestLoader(){
  return(
    <PulseLoader color="#26A65B" size="16px" margin="4px"/>
  )
}

function MyImageComponent() {
  const {src} = useImage({
    srcList: `http://deelay.me/3000/https://picsum.photos/200`,
  })

  return <img
    src={src}
    useSuspense={false}
    />
}

function LoadImageWithLoadingSpinner(){
  return(
    <Suspense fallback={<TestLoader />}>
      <MyImageComponent />
    </Suspense>
  )
}

export default LoadImageWithLoadingSpinner