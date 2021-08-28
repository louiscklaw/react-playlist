import { isEdgeChromium, CustomView } from 'react-device-detect';

export default function IsEdgeChromiumTryout() {
  return (
    <>
      <div>{`IsEdgeChromiumTryout,${JSON.stringify(isEdgeChromium)}`}</div>
    </>
  );
}
