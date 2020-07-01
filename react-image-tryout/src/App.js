import React,{Suspense} from 'react'
import { PulseLoader } from 'halogenium';

import LoadImageWithLoadingSpinner from './components/my-image-component'
import TestImg from './components/test-img'

// https://unsplash.com/s/photos/large
// https://images.unsplash.com/photo-1585943955211-93dfd199a175?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80


export default function App() {
  return (
    <div>
      <h5>test loading animation standalone</h5>
      <PulseLoader color="#26A65B" size="16px" margin="4px"/>

      <h5>test LoadImageWithLoadingSpinner</h5>
      <LoadImageWithLoadingSpinner />

      <h5>test test Img</h5>
      <TestImg />
    </div>
  )
}
