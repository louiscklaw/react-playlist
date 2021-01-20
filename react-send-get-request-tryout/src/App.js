import React from "react";

import "./App.css";

function App() {
  let [response, setResponse] = React.useState("");
  React.useEffect(() => {
    fetch("http://localhost:5001/fir-tryout-f4e7a/us-central1/helloworld")
      .then((response) => {
        return response.text();
      })
      .then((res_text) => {
        setResponse(res_text);
      });
  }, []);

  return (
    <div className="App">
      helloworld
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
}

export default App;
