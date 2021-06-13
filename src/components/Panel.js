import React from "react";
import "../App.css";

const Panel = ({ children }) => {
  let potomki = React.Children.toArray(children);
  return (
    <>
      {potomki.map((child) => {
        return <div className="container">{child}</div>;
      })}
    </>
  );
};

export default Panel;
