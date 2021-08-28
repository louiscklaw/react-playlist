import { engineVersion, CustomView } from 'react-device-detect';

export default function EngineVersionTryout() {
  return (
    <>
      <div>{`engineVersion,${JSON.stringify(engineVersion)}`}</div>
    </>
  );
}
