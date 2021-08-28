import { isMobileOnly, CustomView } from 'react-device-detect';

export default function IsMobileOnlyTryout() {
  return (
    <>
      <div>{`IsMobileOnlyTryout,${JSON.stringify(isMobileOnly)}`}</div>
    </>
  );
}
