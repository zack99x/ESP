import React from "react";
import "./index.css";
import TableHeadItem from "../TableHead";
import TableRow from "../TableRow";

export default function Table(props) {
  return (
    <table className={props.customClass}>
      <thead>
        <tr>
          {props.theadData.map((h) => {
            return <TableHeadItem item={h} />;
          })}
        </tr>
      </thead>
      <tbody>
        {props.tbodyData.map((item) => {
          return <TableRow data={item} />;
        })}
      </tbody>
    </table>
  );
}
