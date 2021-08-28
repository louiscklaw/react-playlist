import { isChrome, CustomView } from 'react-device-detect';

export default function IsChromeTryout() {
  return (
    <>
      <div>{`IsChromeTryout,${JSON.stringify(isChrome)}`}</div>
    </>
  );
}
