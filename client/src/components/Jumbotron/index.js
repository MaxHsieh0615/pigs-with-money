import React from "react";

const jumbotronStyle ={
  clear: "both",
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
