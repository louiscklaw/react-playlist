import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';
import Basic from 'src/examples/Basic';

function App({ test_branch = false }) {
  let helloworld = 'helloworld';
  let helloanotherworld = '123';

  let helloEmpty;

  if (test_branch) {
    console.log('find true');
  } else {
    console.log('find false');
  }

  console.log('helloEmpty', helloEmpty);

  return (
    <div className="App">
      <Basic />
      <a href="https://github.com/tajo/react-movable">
        https://github.com/tajo/react-movable
      </a>
      https://baseweb.design/blog/drag-and-drop-list/
      <div>
        <li>Vertical drag and drop for your lists and tables</li>
        <li>No wrapping divs or additional markup</li>
        <li>Simple single component, no providers or HoCs</li>
        <li>Unopinionated styling, great for CSS in JS too</li>
        <li>Accessible, made for keyboards and screen readers</li>
        <li>Touchable, works on mobile devices</li>
        <li>
          Full control over the dragged item, it's a portaled React component
        </li>
        <li>
          Autoscrolling when dragging (both for containers and the window)
        </li>
        <li>Scrolling with the mousewheel / trackpad when dragging</li>
        <li>Works with semantic table rows too</li>
        <li>Smooth animations, can be disabled</li>
        <li>Varying heights of items supported</li>
        <li>Optional lock of the horizontal axis when dragging</li>
        <li>Typescript and Flow type definitions</li>
        <li>No dependencies, less than 4kB (gzipped)</li>
        <li>Coverage by e2e puppeteer tests</li>
      </div>
    </div>
  );
}

export default App;
