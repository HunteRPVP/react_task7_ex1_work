import React from "react";
import "../App.css";

const Boiling = (props) => {
  if (props.temperature >= 100) {
    return <p className="hot">Вода кипит</p>;
  }
  if (props.temperature <= 0) {
    return <p className="cold">Вода замерзает</p>;
  }
  return <p className="norm">Вода в обычном состоянии</p>;
};

export default Boiling;
