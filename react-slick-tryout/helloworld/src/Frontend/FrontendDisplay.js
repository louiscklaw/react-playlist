import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ShareContext } from '../Backend/context/Share';
import IsLoading from './IsLoading';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', paddingRight: '3rem', zIndex: 1 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', paddingLeft: '3rem', zIndex: 1 }}
      onClick={onClick}
    />
  );
}

function FrontEnd() {
  let [is_loading, setIsLoading] = React.useState(true);

  let { state, cc_settings } = React.useContext(ShareContext);
  let { cc_statistics, setCcStatistics } = React.useContext(ShareContext);

  let [active_carousel_config_id_details, setActiveCarouselConfigIdDetails] = React.useState([]);
  React.useEffect(() => {
    let active_carousel_config_ids = state.columns.active.carouselConfigIds;
    setActiveCarouselConfigIdDetails(active_carousel_config_ids.map((cc_id) => state.carousel_configs[cc_id]));
  }, [state]);

  const account_cc_show = (cc_idx) => {
    setCcStatistics({
      ...cc_statistics,
      show: { ...cc_statistics.show, [cc_idx]: cc_statistics.show[cc_idx] + 1 },
    });
  };

  const account_cc_click = (cc_idx) => {
    console.log('click', 'cc_idx', cc_idx);
    console.log('click', 'cc_statistics.click[cc_idx]', cc_statistics.click[cc_idx]);
    setCcStatistics({
      ...cc_statistics,
      click: {
        ...cc_statistics.click,
        [cc_idx]: cc_statistics.click[cc_idx] + 1,
      },
    });
  };

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  if (is_loading) return <IsLoading />;

  return (
    <div style={{ width: '50%' }}>
      <Slider
        {...cc_settings}
        style={{ width: '100%', display: 'flex', flexFlow: 'column', justifyContent: 'center' }}
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
        afterChange={(idx) => account_cc_show(idx)}>
        {active_carousel_config_id_details.map((cc_detail, idx) => {
          let { img_url } = cc_detail.meta;
          return (
            <div key={`cc_idx_${idx}`} style={{ width: '100%' }} onClick={(e) => account_cc_click(idx)}>
              <div
                style={{
                  height: '300px',
                  backgroundImage: `url(${img_url})`,
                  backgroundSize: 'cover',
                }}></div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default FrontEnd;
