import React from "react";
import { useStickyBox } from "react-sticky-box";
import StickyBox from "react-sticky-box";
import Button from "@mui/material/Button";

function App({ test_branch = false }) {
  const stickyRef = useStickyBox({ offsetTop: 20, offsetBottom: 20 });

  return (
    <div className="App">
      <body>
        <div style={{ height: "400px", backgroundColor: "tomato" }}>header</div>

        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <StickyBox>
            <div style={{ height: "100px", backgroundColor: "cyan" }}>
              Sidebar <Button variant="contained">Hello World</Button>
            </div>
          </StickyBox>
          <div style={{ height: "900px", backgroundColor: "gold" }}>
            Main Content <Button variant="contained">Hello World</Button>
          </div>
        </div>
        <div style={{ height: "800px", backgroundColor: "tomato" }}>
          footer <Button variant="contained">Hello World</Button>
        </div>
      </body>
    </div>
  );
}

export default App;
