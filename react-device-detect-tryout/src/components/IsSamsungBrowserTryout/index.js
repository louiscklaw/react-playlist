import { isSamsungBrowser, CustomView } from 'react-device-detect';

export default function IsSamsungBrowserTryout() {
  return (
    <>
      <div>{`IsSamsungBrowserTryout,${JSON.stringify(isSamsungBrowser)}`}</div>
    </>
  );
}
