import { isWinPhone, CustomView } from 'react-device-detect';

export default function IsWinPhoneTryout() {
  return (
    <>
      <div>{`IsWinPhoneTryout,${JSON.stringify(isWinPhone)}`}</div>
    </>
  );
}
