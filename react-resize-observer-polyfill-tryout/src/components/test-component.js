import React from 'react'

import ResizeObserver from 'resize-observer-polyfill';

const ro = new ResizeObserver((entries, observer) => {
  console.log('observer', observer)
  for (const entry of entries) {
      const {left, top, width, height} = entry.contentRect;

      console.log('Element:', entry.target);
      console.log(`Element's size: ${ width }px x ${ height }px`);
      console.log(`Element's paddings: ${ top }px ; ${ left }px`);
  }
});


function TestComponent(){
  React.useEffect(() => (ro.observe(document.body), ro.disconnect), [])

  return(
    <>
      Test Component
    </>
  )
}

export default TestComponent