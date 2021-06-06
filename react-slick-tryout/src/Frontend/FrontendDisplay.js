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
    }, 100)
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
              height: '500px',

              display: 'flex',
              flexFlow: 'column',
              justifyContent: 'center',
            }}
          >
            {active_carousel_config_id_details.map(cc_detail => {
              let { img_url, cc_description } = cc_detail.meta
              return (
                <>
                  <div
                    style={{
                      width: '100%',
                      height: '500px',
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${img_url})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',

                        display: 'flex',
                        flexFlow: 'column',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                      }}
                    >
                      <div
                        style={{
                          width: '100%',
                          height: '5rem',

                          color: 'white',

                          background: 'rgba(0, 0, 0, 0.5)',
                          backdropFilter: 'blur(30px)',
                          borderRadius: '5px 5px 0px 0px',

                          display: 'flex',
                          flexFlow: 'column',
                          justifyContent: 'center',
                          alignItems: 'flex-start',
                        }}
                      >
                        <div style={{ paddingLeft: '2rem' }}>
                          <h3>title</h3>
                          <p>{cc_description}</p>
                        </div>
                      </div>
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
