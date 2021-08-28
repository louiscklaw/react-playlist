import { isChromium, CustomView } from 'react-device-detect';

export default function IsChromiumTryout() {
  return (
    <>
      <div>{`IsChromiumTryout,${JSON.stringify(isChromium)}`}</div>
    </>
  );
}
