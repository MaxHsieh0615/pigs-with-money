import React from "react";

const jumbotronStyle ={
  height: 300,
  clear: "both",
  paddingTop: 120,
  textAlign: "center"
}

function Jumbotron({ children }) {
  return (
    <div
      style={jumbotronStyle}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
