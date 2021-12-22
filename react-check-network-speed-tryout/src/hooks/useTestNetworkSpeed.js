import { useState, useEffect } from 'react';

let PREFIX = 'useTestNetworkSpeed';

export default function useTestNetworkSpeed() {
  const [network_speed, setNetworkSpeed] = useState({ isTesting: true });
  const [err, setErr] = useState();

  var imageAddr =
    'https://cdn.jsdelivr.net/gh/louiscklaw/test-resources@master/1kb.png';
  var downloadSize_B = 1 * 1024;

  function MeasureConnectionSpeed() {
    var startTime, endTime;
    var download = new Image();

    download.onload = function () {
      endTime = new Date().getTime();
      showResults();
    };

    download.onerror = function (err) {
      console.error(PREFIX, { err });
      setErr(err);
    };

    startTime = new Date().getTime();

    var cacheBuster = '?nnn=' + startTime;
    download.src = imageAddr + cacheBuster;

    function showResults() {
      var duration = (endTime - startTime) / 1000;
      var bitsLoaded = downloadSize_B * 8;
      var speedBps = (bitsLoaded / duration).toFixed(2);
      var speedKbps = (speedBps / 1024).toFixed(2);

      let isTesting = false;

      setNetworkSpeed({
        isTesting,
        duration,
        bitsLoaded,
        speedBps,
        speedKbps,
        err,
      });
    }
  }

  useEffect(() => {
    MeasureConnectionSpeed();
  }, []);

  return { ...network_speed };
}
