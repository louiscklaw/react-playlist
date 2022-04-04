import React from 'react';
import { GlobalContext } from 'src/contexts/GlobalContext';

export default function HelloComponent() {
  let { helloworld, helloFunc } = React.useContext(GlobalContext);

  React.useEffect(() => {
    helloFunc();
  });

  return (
    <>
      <div>autoplay</div>
      <video class="w-full shadow-lg" autoplay loop controls muted>
        <source
          src="https://mdbootstrap.com/img/video/Sail-Away.mp4"
          type="video/mp4"
        />
      </video>
      <div>responsive</div>
      <div
        class="embed-responsive embed-responsive-4by3 relative w-full overflow-hidden"
        style={{ paddingTop: '75%' }}>
        <iframe
          class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
          allowfullscreen=""
          data-gtm-yt-inspected-2340190_699="true"
          id="240632615"></iframe>
      </div>
      <div>basic sample</div>
      <div
        class="embed-responsive embed-responsive-21by9 relative w-full overflow-hidden"
        style={{ paddingTop: '42.857143%' }}>
        <iframe
          class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
          allowfullscreen=""
          data-gtm-yt-inspected-2340190_699="true"
          id="240632615"></iframe>
      </div>
    </>
  );
}
