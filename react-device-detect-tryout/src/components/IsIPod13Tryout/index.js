import { isIPod13, CustomView } from 'react-device-detect';

export default function IsIPod13Tryout() {
  return (
    <>
      <div>{`IsIPod13Tryout,${JSON.stringify(isIPod13)}`}</div>
    </>
  );
}
