import { isElectron, CustomView } from 'react-device-detect';

export default function IsElectronTryout() {
  return (
    <>
      <div>{`IsElectronTryout,${JSON.stringify(isElectron)}`}</div>
    </>
  );
}
