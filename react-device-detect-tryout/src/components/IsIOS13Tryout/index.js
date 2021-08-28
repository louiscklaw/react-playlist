import { isIOS13, CustomView } from 'react-device-detect';

export default function IsIOS13Tryout() {
  return (
    <>
      <div>{`IsIOS13Tryout,${JSON.stringify(isIOS13)}`}</div>
    </>
  );
}
