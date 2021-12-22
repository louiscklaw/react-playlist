import React from "react";
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from "src/contexts/GlobalContext";
import useTestNetworkSpeed from "./hooks/useTestNetworkSpeed";

function App() {
  let network_speed = useTestNetworkSpeed();
  return (
    <div className="App">
      <GlobalContextProvider>
        {JSON.stringify({ network_speed })}
      </GlobalContextProvider>
    </div>
  );
}

export default App;
