import { fullBrowserVersion, CustomView } from 'react-device-detect';

export default function fullBrowserVersionTryout() {
  return (
    <>
      <div>{`fullBrowserVersion,${JSON.stringify(fullBrowserVersion)}`}</div>
    </>
  );
}
