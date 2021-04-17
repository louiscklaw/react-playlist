import React from "react";
import bcrypt from "bcryptjs";

import "./App.css";

function App() {
  let [temp1, setTemp1] = React.useState("");
  let [compare, setCompare] = React.useState(false);
  let [compare1, setCompare1] = React.useState(false);
  React.useEffect(() => {
    var hash = bcrypt.hashSync("B4c0//", 10);

    setTemp1(hash);

    setCompare(
      bcrypt.compareSync(
        "B4c0//",
        "$2a$08$GekhE4lfdK8GmX29GGLWcOKKtnUcH7ZT10flfeICm2bw5vWXuQDUm"
      )
    );

    setCompare1(bcrypt.compareSync("B4c0//", hash));
  }, []);
  return (
    <div className="App">
      <div>helloworld</div>
      <pre>hash: {JSON.stringify(temp1)}</pre>
      <pre>compare: {JSON.stringify(compare)}</pre>
      <pre>compare: {JSON.stringify(compare1)}</pre>
    </div>
  );
}

export default App;
