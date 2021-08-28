import { isSafari, CustomView } from 'react-device-detect';

export default function IsSafariTryout() {
  return (
    <>
      <div>{`IsSafariTryout,${JSON.stringify(isSafari)}`}</div>
    </>
  );
}
