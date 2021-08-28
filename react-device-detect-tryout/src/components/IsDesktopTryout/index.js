import { isDesktop, CustomView } from 'react-device-detect';

export default function IsDesktopTryout() {
  return (
    <>
      <div>{`IsDesktopTryout,${JSON.stringify(isDesktop)}`}</div>
    </>
  );
}
