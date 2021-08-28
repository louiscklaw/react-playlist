import { BrowserTypes, CustomView } from 'react-device-detect';

export default function BrowserTypesTryout() {
  return (
    <>
      <div>{JSON.stringify(BrowserTypes)}</div>
    </>
  );
}
