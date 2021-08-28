import { isIPhone13, CustomView } from 'react-device-detect';

export default function IsIPhone13Tryout() {
  return (
    <>
      <div>{`IsIPhone13Tryout,${JSON.stringify(isIPhone13)}`}</div>
    </>
  );
}
