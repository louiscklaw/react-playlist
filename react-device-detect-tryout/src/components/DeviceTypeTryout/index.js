import { deviceType, CustomView } from 'react-device-detect';

export default function deviceTypeTryout() {
  return (
    <>
      <div>{JSON.stringify(deviceType)}</div>
    </>
  );
}
