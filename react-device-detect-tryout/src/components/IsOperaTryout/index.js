import { isOpera, CustomView } from 'react-device-detect';

export default function IsOperaTryout() {
  return (
    <>
      <div>{`IsOperaTryout,${JSON.stringify(isOpera)}`}</div>
    </>
  );
}
