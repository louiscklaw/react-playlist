import React, { useState } from 'react';

import ReactDrawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';

function App({ test_branch = false }) {
  let helloEmpty;
  let [position, setPosition] = useState('right');
  let [noOverlay, setNoOverlay] = useState(false);
  let [open, setOpen] = useState(false);

  if (test_branch) {
    console.log('find true');
  } else {
    console.log('find false');
  }

  console.log('helloEmpty', helloEmpty);

  const closeDrawer = () => {
    setOpen(false);
  };
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const onDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <div style={{ margin: 200 }}>
        <h1>React Drawer configuration</h1>
        <div style={{ margin: 20 }}>
          <label>Position</label>
          <select value={position} onChange={(e) => setPosition(e.target.value)}>
            <option value="top">top</option>
            <option value="bottom">bottom</option>
            <option value="left">left</option>
            <option value="right">right</option>
          </select>
        </div>
        <div style={{ margin: 20 }}>
          <input type="checkbox" checked={noOverlay} onChange={setNoOverlay} />
          <label>No overlay</label>
          <small>(The overlay lets you close the drawer on click)</small>
        </div>
        <button style={{ margin: 20 }} onClick={toggleDrawer} disabled={open && !noOverlay}>
          {!open ? <span>show drawer</span> : <span>close drawer</span>}
        </button>
      </div>
      <ReactDrawer open={open} position={position} onClose={onDrawerClose} noOverlay={noOverlay}>
        <i onClick={closeDrawer} className="icono-cross"></i>
        <h2>What a nice drawer !</h2>
      </ReactDrawer>
    </div>
  );
}

export default App;
