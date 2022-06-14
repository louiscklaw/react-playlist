import { useEffect, useState } from 'react'
import Div100vh, { use100vh } from 'react-div-100vh'

export default function TestMobileFullScreen() {
  const nav_height = 100
  const full_height = use100vh()
  let [body_height, setBodyHeight] = useState(full_height - nav_height || 500)

  useEffect(() => {
    if (full_height) {
      console.log({ full_height })
      setBodyHeight(full_height - nav_height)
    }
  }, [full_height])

  return (
    <>
      <Div100vh>
        <div style={{ backgroundColor: 'tomato', height: body_height || 500 }}>
          TestBottomNavBar{JSON.stringify({ body_height, full_height })}
        </div>
        <div style={{ backgroundColor: 'gold', height: nav_height }}>TestBottomNavBar</div>
      </Div100vh>
    </>
  )
}
