import { browserVersion, CustomView } from 'react-device-detect';

export default function browserVersionTryout() {
  return (
    <>
      <div>{`browserVersionTryout,${JSON.stringify(browserVersion)}`}</div>
    </>
  );
}
