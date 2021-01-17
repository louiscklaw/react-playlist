import React from "react";

import "./App.css";

function App() {
  const [ele_vscroll, setEleVScroll] = React.useState(null);
  const [start_pos, setStartPos] = React.useState(0);

  const showNavBar = () => {
    document.querySelector('#navbar').style.display='block';
  }

  const hideNavBar = () => {
    document.querySelector('#navbar').style.display='none';
  }

  const handleScroll = (e) => {
    let current_y = ele_vscroll.getBoundingClientRect().y
    console.log(current_y);
    if (current_y< start_pos-10){
      console.log('helloworld')
      showNavBar()
    }else{
      hideNavBar()
    }
  };

  React.useEffect(() => {
    let ele = document.querySelector("#target");
    if (ele != null) {
      setEleVScroll(ele);
      setStartPos(ele.getBoundingClientRect().y)
    }
  }, []);

  return (
    <div
      className="App"
      style={{ backgroundColor: "cyan", height: "100vh", width: "100%" }}
    >
      <div style={{ height: "30vh" }}>helloworld</div>
      <div
        style={{ height: "70vh", overflowY: "scroll" }}
        onScroll={handleScroll}
      >
        <div id="navbar" style={{
          backgroundColor: 'pink',
          display:'none',
          position:'absolute',
          width: '100vw'
          }}>
          nav bar
        </div>
        <div
          id="target"
          style={{
            height: "200vh",
            width: "100%",
            backgroundColor: "orange",
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
