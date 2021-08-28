import { isAndroid, CustomView } from 'react-device-detect';

export default function IsAndroidTryoutTryout() {
  return (
    <>
      <div>{`IsAndroidTryout,${JSON.stringify(isAndroid)}`}</div>
    </>
  );
}
