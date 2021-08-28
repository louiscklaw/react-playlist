import { isIPad13, CustomView } from 'react-device-detect';

export default function IsIPad13Tryout() {
  return (
    <>
      <div>{`IsIPad13Tryout,${JSON.stringify(isIPad13)}`}</div>
    </>
  );
}
