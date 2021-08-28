import { isYandex, CustomView } from 'react-device-detect';

export default function IsYandexTryout() {
  return (
    <>
      <div>{`IsYandexTryout,${JSON.stringify(isYandex)}`}</div>
    </>
  );
}
