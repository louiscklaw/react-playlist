import React from 'react';
import { ShareContext } from './context/Share';

export default function Settings() {
  let { cc_settings, setCcSettings } = React.useContext(ShareContext);

  const handleDotsChecked = (e) => {
    setCcSettings({ ...cc_settings, dots: !cc_settings.dots });
  };

  const handleInfiniteChecked = (e) => {
    setCcSettings({ ...cc_settings, infinite: !cc_settings.infinite });
  };

  const handleAutoplayChecked = (e) => {
    setCcSettings({ ...cc_settings, autoplay: !cc_settings.autoplay });
  };

  const handleSlidesToShowChanged = (e) => {
    if (isNaN(e.target.value)) {
    } else {
      let a = parseInt(e.target.value);
      setCcSettings({ ...cc_settings, slidesToShow: a });
    }
  };

  const handleSlidesToScrollChanged = (e) => {
    if (isNaN(e.target.value)) {
    } else {
      let a = parseInt(e.target.value);
      setCcSettings({ ...cc_settings, slidesToScroll: a });
    }
  };

  const handleAutoplaySpeedChanged = (e) => {
    if (isNaN(e.target.value)) {
    } else {
      let a = parseInt(e.target.value);
      setCcSettings({ ...cc_settings, autoplaySpeed: a });
    }
  };

  const Dots = () => {
    return (
      <>
        <div>
          <input
            type="checkbox"
            id="dots"
            name="dots"
            onChange={handleDotsChecked}
            checked={cc_settings.dots}
          />
          <label htmlFor="dots">enable dots</label>
        </div>
      </>
    );
  };

  const Autoplay = () => {
    return (
      <>
        <div>
          <input
            type="checkbox"
            id="autoplay"
            name="autoplay"
            onChange={handleAutoplayChecked}
            checked={cc_settings.autoplay}
          />
          <label htmlFor="autoplay">enable autoplay</label>
        </div>
      </>
    );
  };

  const Infinite = () => {
    return (
      <>
        <div>
          <input
            type="checkbox"
            onChange={handleInfiniteChecked}
            checked={cc_settings.infinite}
          />
          <label htmlFor="infinite">enable infinite</label>
        </div>
      </>
    );
  };

  const SlidesToShow = () => {
    return (
      <>
        <div>
          <label htmlFor="infinite">SlidesToShow</label>
          <input
            type="text"
            onChange={handleSlidesToShowChanged}
            value={cc_settings.slidesToShow}
          />
        </div>
      </>
    );
  };

  const SlidesToScroll = () => {
    return (
      <>
        <div>
          <label htmlFor="infinite">SlidesToScroll</label>
          <input
            type="text"
            onChange={handleSlidesToScrollChanged}
            value={cc_settings.slidesToScroll}
          />
        </div>
      </>
    );
  };

  const AutoplaySpeed = () => {
    return (
      <>
        <div>
          <label htmlFor="infinite">AutoplaySpeed</label>
          <input
            type="text"
            onInput={handleAutoplaySpeedChanged}
            value={cc_settings.autoplaySpeed}
          />
        </div>
      </>
    );
  };

  return (
    <>
      <div>Settings</div>
      <Dots />
      <Infinite />
      <SlidesToShow />
      <SlidesToScroll />
      <Autoplay />
      <AutoplaySpeed />

      <pre>{JSON.stringify(cc_settings, null, 2)}</pre>
    </>
  );
}
