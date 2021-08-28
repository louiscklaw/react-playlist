import { isBrowser, CustomView } from 'react-device-detect';

export default function isBrowserTryout() {
  return (
    <>
      <div>{`IsBrowserTryout,${JSON.stringify(isBrowser)}`}</div>
    </>
  );
}
