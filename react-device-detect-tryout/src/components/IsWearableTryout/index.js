import { isWearable, CustomView } from 'react-device-detect';

export default function IsWearableTryout() {
  return (
    <>
      <div>{`IsWearableTryout,${JSON.stringify(isWearable)}`}</div>
    </>
  );
}
