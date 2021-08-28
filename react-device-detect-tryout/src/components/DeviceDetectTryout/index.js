import { deviceDetect, CustomView } from 'react-device-detect';

export default function deviceDetectTryout() {
  return (
    <>
      <div>{`deviceDetectTryout,${JSON.stringify(deviceDetect())}`}</div>
    </>
  );
}
