import { isMobile, CustomView } from 'react-device-detect';

export default function IsMobileTryout() {
  return (
    <>
      <div>{`IsMobileTryout,${JSON.stringify(isMobile)}`}</div>
    </>
  );
}
