import { osVersion, CustomView } from 'react-device-detect';

export default function OsVersionTryout() {
  return (
    <>
      <div>{`OsVersionTryout,${JSON.stringify(osVersion)}`}</div>
    </>
  );
}
