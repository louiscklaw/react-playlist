import { getUA, CustomView } from 'react-device-detect';

export default function GetUATryout() {
  return (
    <>
      <div>{`getUA,${JSON.stringify(getUA)}`}</div>
    </>
  );
}
