import React from "react";
import { GlobalContextProvider } from "src/contexts/GlobalContext";

import UsingProduce from "./components/UsingProduce";
import CurriedProducers from "./components/CurriedProducers";
import ReactAndImmer from "./components/ReactAndImmer";

function App() {
  // Using produce

  return (
    <div className="App">
      <GlobalContextProvider>
        <h1>UsingProduce</h1>
        <UsingProduce />

        <h1>CurriedProducers</h1>
        <CurriedProducers />

        <h1>ReactAndImmer</h1>
        <ReactAndImmer />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
