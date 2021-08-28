import { isElectron, CustomView } from 'react-device-detect';

export default function IsFirefoxTryout() {
  return (
    <>
      <div>{`IsFirefoxTryout,${JSON.stringify(isElectron)}`}</div>
    </>
  );
}
