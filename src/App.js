import React from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import Panel from "./components/Panel";

function App() {
  return (
    <div className="App">
      <Panel>
        <Calculator />
      </Panel>
    </div>
  );
}

export default App;
