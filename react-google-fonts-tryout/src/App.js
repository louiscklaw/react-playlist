import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. <br />
          2020年12月8日 5時27分
          <br />
          <div style={{ fontWeight: "100" }}>座席番号 100</div>
          <div style={{ fontWeight: "300" }}>座席番号 300</div>
          <div style={{ fontWeight: "400" }}>座席番号 400</div>
          <div style={{ fontWeight: "500" }}>座席番号 500</div>
          <div style={{ fontWeight: "700" }}>座席番号 700</div>
          <div style={{ fontWeight: "900" }}>座席番号 900</div>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
