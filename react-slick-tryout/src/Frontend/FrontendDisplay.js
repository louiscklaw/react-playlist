import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { ShareContext } from '../Backend/context/Share'
import IsLoading from './IsLoading'

function FrontEnd() {
  let [is_loading, setIsLoading] = React.useState(true)

  let { state, cc_settings } = React.useContext(ShareContext)

  let [active_carousel_config_id_details, setActiveCarouselConfigIdDetails] = React.useState([])
  React.useEffect(() => {
    let active_carousel_config_ids = state.columns.active.carouselConfigIds
    setActiveCarouselConfigIdDetails(
      active_carousel_config_ids.map(cc_id => state.carousel_configs[cc_id]),
    )
  }, [state])

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <>
      {is_loading ? (
        <>
          <IsLoading />
        </>
      ) : (
        <>
          <Slider
            {...cc_settings}
            style={{
              width: '100%',
              height: '100%',

              display: 'flex',
              flexFlow: 'column',
              justifyContent: 'center',
            }}
          >
            {active_carousel_config_id_details.map(cc_detail => {
              let { img_url, cc_description } = cc_detail.meta
              return (
                <>
                  <div>
                    <div
                      style={{
                        width: '100%',
                        height: '550px',
                        backgroundImage: `url(${img_url})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                      }}
                    >
                      {cc_description}
                    </div>
                  </div>
                </>
              )
            })}
          </Slider>
        </>
      )}
    </>
  )
}

export default FrontEnd
