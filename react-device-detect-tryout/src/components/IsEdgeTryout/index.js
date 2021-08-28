import { isEdge, CustomView } from 'react-device-detect';

export default function IsEdgeTryout() {
  return (
    <>
      <div>{`IsEdgeTryout,${JSON.stringify(isEdge)}`}</div>
    </>
  );
}
