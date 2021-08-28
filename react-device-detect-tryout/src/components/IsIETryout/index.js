import { isIE, CustomView } from 'react-device-detect';

export default function IsIETryout() {
  return (
    <>
      <div>{`IsIETryout,${JSON.stringify(isIE)}`}</div>
    </>
  );
}
