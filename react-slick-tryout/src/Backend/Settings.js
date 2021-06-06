import React from 'react'
import { ShareContext } from './context/Share'

export default function Settings() {
  let { cc_settings, setCcSettings } = React.useContext(ShareContext)

  const handleDotsChecked = e => {
    setCcSettings({ ...cc_settings, dots: !cc_settings.dots })
  }

  const handleInfiniteChecked = e => {
    setCcSettings({ ...cc_settings, infinite: !cc_settings.infinite })
  }

  const handleSlidesToShowChanged = e => {
    if (isNaN(e.target.value)) {
    } else {
      let a = parseInt(e.target.value)
      setCcSettings({ ...cc_settings, slidesToShow: a })
    }
  }

  const Dots = () => {
    return (
      <>
        <input
          type="checkbox"
          id="dots"
          name="dots"
          onInput={handleDotsChecked}
          checked={cc_settings.dots}
        />
        <label for="dots">enable dots</label>
      </>
    )
  }

  const Infinite = () => {
    return (
      <>
        <input
          type="checkbox"
          id="infinite"
          name="infinite"
          onInput={handleInfiniteChecked}
          checked={cc_settings.infinite}
        />
        <label for="infinite">enable infinite</label>
      </>
    )
  }

  const SlidesToShow = () => {
    return (
      <>
        <div>
          <label for="infinite">SlidesToShow</label>
          <input
            type="text"
            id="infinite"
            name="infinite"
            onInput={handleSlidesToShowChanged}
            value={cc_settings.slidesToShow}
          />
        </div>
      </>
    )
  }

  return (
    <>
      <div>Settings</div>
      <Dots />
      <Infinite />
      <SlidesToShow />
      <pre>{JSON.stringify(cc_settings, null, 2)}</pre>
    </>
  )
}
