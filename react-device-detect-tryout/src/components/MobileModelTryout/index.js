import { mobileModel, CustomView } from 'react-device-detect';

export default function MobileModelTryout() {
  return (
    <>
      <div>{`MobileModelTryout,${JSON.stringify(mobileModel)}`}</div>
    </>
  );
}
