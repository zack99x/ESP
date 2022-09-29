import React from "react";
import "./index.css";

export default function TableRow(props) {
  return (
    <tr>
      {props.data.map((subitem) => {
        return <td>{subitem}</td>;
      })}
    </tr>
  );
}
