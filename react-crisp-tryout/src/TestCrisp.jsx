import React from 'react';

export default function Helloworld() {
  React.useEffect(() => {
    // Include the Crisp code here, without the <script></script> tags
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = '21171773-a1f2-406e-8b27-af0abb5b670a';

    (function () {
      var d = document;
      var s = d.createElement('script');

      s.src = 'https://client.crisp.chat/l.js';
      s.async = 1;
      d.getElementsByTagName('head')[0].appendChild(s);
    })();
  }, []);

  return <></>;
}
