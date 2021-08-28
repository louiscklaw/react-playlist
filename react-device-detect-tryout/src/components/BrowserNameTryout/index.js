import { browserName, CustomView } from 'react-device-detect';

export default function BrowserNameTryout() {
  return (
    <>
      <div>{`browserName,${JSON.stringify(browserName)}`}</div>
    </>
  );
}
