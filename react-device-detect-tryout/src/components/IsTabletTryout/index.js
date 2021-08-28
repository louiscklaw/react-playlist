import { isTablet, CustomView } from 'react-device-detect';

export default function IsTabletTryout() {
  return (
    <>
      <div>{`IsTabletTryout,${JSON.stringify(isTablet)}`}</div>
    </>
  );
}
