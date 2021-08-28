import { isConsole, CustomView } from 'react-device-detect';

export default function IsConsoleTryout() {
  return (
    <>
      <div>{`IsConsoleTryout,${JSON.stringify(isConsole)}`}</div>
    </>
  );
}
