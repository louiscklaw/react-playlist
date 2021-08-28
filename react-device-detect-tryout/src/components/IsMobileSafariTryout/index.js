import { isMobileSafari, CustomView } from 'react-device-detect';

export default function IsMobileSafariTryout() {
  return (
    <>
      <div>{`IsMobileSafariTryout,${JSON.stringify(isMobileSafari)}`}</div>
    </>
  );
}
