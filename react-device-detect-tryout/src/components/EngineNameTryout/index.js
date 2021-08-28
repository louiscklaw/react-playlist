import { engineName, CustomView } from 'react-device-detect';

export default function EngineNameTryout() {
  return (
    <>
      <div>{`engineName,${JSON.stringify(engineName)}`}</div>
    </>
  );
}
