import { useEffect } from 'react'
import WebFont from 'webfontloader'

export default function Fonts() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka'],
      },
    })
  }, [])

  return <></>
}
