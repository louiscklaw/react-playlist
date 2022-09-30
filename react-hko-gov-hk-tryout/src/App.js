import React from "react";
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from "src/contexts/GlobalContext";

function App({ test_branch = false }) {
  let helloworld = "helloworld";
  let helloanotherworld = "123";

  let helloEmpty;

  if (test_branch) {
    console.log("find true");
  } else {
    console.log("find false");
  }

  console.log("helloEmpty", helloEmpty);

  fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en")
    .then(res => res.text())
    .then(res_text => console.log(res_text));

  return (
    <div className="App">
      <GlobalContextProvider>
        {/* <HelloComponent /> */}
        hellocomponents
        {helloanotherworld}
        {JSON.stringify(helloEmpty, null, 2)}
      </GlobalContextProvider>
    </div>
  );
}

export default App;