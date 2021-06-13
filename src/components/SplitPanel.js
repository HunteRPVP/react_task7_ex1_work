import React from "react";
import "../App.css";
import Panel from "./Panel";

const SplitPanel = ({ left, right }) => (
  <div className="split-container">
    <div className="split-container-left">
      <Panel>{left}</Panel>
    </div>
    <div className="split-container-right">
      <Panel>{right}</Panel>
    </div>
  </div>
);

export default SplitPanel;
