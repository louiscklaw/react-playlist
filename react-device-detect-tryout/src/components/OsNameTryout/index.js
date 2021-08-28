import { osName, CustomView } from 'react-device-detect';

export default function OsNameTryout() {
  return (
    <>
      <div>{`OsNameTryout,${JSON.stringify(osName)}`}</div>
    </>
  );
}
