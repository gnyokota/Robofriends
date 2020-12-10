import React from "react";

//children
function Scroll(props) {
  const myStyle = {
    overflowY: "auto",
    border: "2px solid #ec524b",
    height: "600px",
  };

  return <div style={myStyle}>{props.children}</div>;
}

export default Scroll;
