import React from 'react';

export default () => {
  let [helloworld, setHelloworld] = React.useState('');
  let [device_type, setDeviceType] = React.useState('mobile');

  return { helloworld, setHelloworld, device_type, setDeviceType };
};
