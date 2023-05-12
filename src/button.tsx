import React, { useState } from "react";

function MyButton(props: any) {
  const [hover, setHover] = useState(false);
  const buttonHoverStyle = {
    backgroundColor: "white",
    border: props.border,
    color: props.color,
  };
  const buttonStyle = {
    backgroundColor: props.backgroundColor,
    color: "white",
    fontSize: "16px",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    ...(hover && buttonHoverStyle),
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {props.text}
    </button>
  );
}

export default MyButton;
