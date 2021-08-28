import { isLegacyEdge, CustomView } from 'react-device-detect';

export default function IsLegacyEdgeTryout() {
  return (
    <>
      <div>{`IsLegacyEdgeTryout,${JSON.stringify(isLegacyEdge)}`}</div>
    </>
  );
}
