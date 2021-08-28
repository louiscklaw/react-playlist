import { isMacOs, CustomView } from 'react-device-detect';

export default function IsMacOsTryout() {
  return (
    <>
      <div>{`IsMacOsTryout,${JSON.stringify(isMacOs)}`}</div>
    </>
  );
}
