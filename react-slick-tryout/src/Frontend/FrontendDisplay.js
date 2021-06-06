import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { ShareContext } from '../Backend/context/Share'

import { cc_settings } from './cc_settings'

function FrontEnd() {
  let { state } = React.useContext(ShareContext)
  let active_carousel_config_ids = state.columns.active.carouselConfigIds

  let active_carousel_config_id_details = active_carousel_config_ids.map(
    cc_id => state.carousel_configs[cc_id],
  )

  return (
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
          let { img_url, cc_description } = cc_detail.content
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
      {/* <pre>{JSON.stringify(active_carousel_config_id_details, null, 2)}</pre> */}
    </>
  )
}

export default FrontEnd
