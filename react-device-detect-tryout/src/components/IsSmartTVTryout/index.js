import { isSmartTV, CustomView } from 'react-device-detect';

export default function IsSmartTVTryout() {
  return (
    <>
      <div>{`IsSmartTVTryout,${JSON.stringify(isSmartTV)}`}</div>
    </>
  );
}
