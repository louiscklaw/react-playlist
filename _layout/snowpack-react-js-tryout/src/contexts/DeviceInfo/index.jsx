import React, { useContext, useEffect } from 'react';
import DeviceDetect from 'react-device-detect';
import { BusContext } from '../BusContext';

export default () => {
  let { setDeviceType } = useContext(BusContext);

  useEffect(() => {
    setDeviceType(DeviceDetect.deviceType);
  }, []);

  return <></>;
};
