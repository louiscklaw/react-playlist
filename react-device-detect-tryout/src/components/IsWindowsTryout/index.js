import { isWindows, CustomView } from 'react-device-detect';

export default function IsWindowsTryout() {
  return (
    <>
      <div>{`IsWindowsTryout,${JSON.stringify(isWindows)}`}</div>
    </>
  );
}
