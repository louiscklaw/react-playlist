import React, { useState } from 'react';
// import HelloComponent from 'src/components/HelloComponent';
// import { GlobalContextProvider } from 'src/contexts/GlobalContext';

import { useSwipeable } from 'react-swipeable';

const config = {
  delta: 10, // min distance(px) before a swipe starts. *See Notes*
  preventDefaultTouchmoveEvent: false, // call e.preventDefault *See Details*
  trackTouch: true, // track touch input
  trackMouse: false, // track mouse input
  rotationAngle: 0, // set a rotation angle
};

function App() {
  let [test, setTest] = useState();
  let [show_swipe, setShowSwipe] = useState(null);
  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      setTest(eventData);
    },
    onSwipedLeft: (eventData) => {
      alert('helloworld');
      setShowSwipe(eventData);
    },
    onSwipedRight: (eventData) => {
      alert('goodbye world');
      setShowSwipe(eventData);
    },
    ...config,
  });

  return (
    <div className="App">
      {/* <div>{JSON.stringify(test)}</div> */}
      <div>{JSON.stringify(show_swipe)}</div>
      <div {...handlers} style={{ width: '300px', height: '300px', backgroundColor: 'cyan' }}>
        You can swipe here
      </div>
    </div>
  );
}

export default App;
