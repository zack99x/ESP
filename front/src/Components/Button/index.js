import React from "react";
import "./index.css";

export default function Button(props) {
  return (
    <button
      type={props.type}
      className={props.className}
      disabled={props.disabled || false}
    >
      {props.text}
    </button>
  );
}
