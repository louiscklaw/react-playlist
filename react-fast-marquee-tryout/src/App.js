import React from "react";
import Marquee from "react-fast-marquee";

function App({ test_branch = false }) {
  return (
    <div className="App">
      <div>helloworld</div>
      <div>
        <Marquee gradient={false}>
          I can be a React component, multiple React components, or just some text.
          <button>hellobutton</button>
          <button>hellobutton</button>
          <button>hellobutton</button>
        </Marquee>
      </div>
      <div>https://www.react-fast-marquee.com/documentation</div>
    </div>
  );
}

export default App;
