import { isIOS, CustomView } from 'react-device-detect';

export default function IsIOSTryout() {
  return (
    <>
      <div>{`IsIOSTryout,${JSON.stringify(isIOS)}`}</div>
    </>
  );
}
