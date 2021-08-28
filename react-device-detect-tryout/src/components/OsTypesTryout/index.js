import { OsTypes, CustomView } from 'react-device-detect';

export default function OsTypesTryout() {
  return (
    <>
      <div>{`OsTypesTryout,${JSON.stringify(OsTypes)}`}</div>
    </>
  );
}
