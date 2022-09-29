import React from "react";
import "./index.css";

export default function TableHeadItem(props) {
  return <th title={props.item}>{props.item}</th>;
}
