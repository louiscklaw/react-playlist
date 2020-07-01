import React from 'react'
import Iframe from 'react-iframe'

function CodesandboxHelloworld(){
  return(
    <div style={{width: "100%"}}>
      <iframe
        src="https://codesandbox.io/embed/react-helloworld-zhqtk?fontsize=14&hidenavigation=1&theme=dark"
        style={{width: "100%", height: "500px", border: '0', borderRadius: '4px', overflow: "hidden"}}
        title="add-react-to-a-website"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-autoplay"
      ></iframe>
    </div>
  )
}

export default CodesandboxHelloworld