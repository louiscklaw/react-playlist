import { mobileVendor, CustomView } from 'react-device-detect';

export default function MobileVendorTryout() {
  return (
    <>
      <div>{`MobileVendorTryout,${JSON.stringify(mobileVendor)}`}</div>
    </>
  );
}
