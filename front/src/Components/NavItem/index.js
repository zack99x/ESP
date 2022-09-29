//Mise en forme des liens pour le menu
import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

export default function NavItem(props) {
  return (
    <NavLink className="nav-item" to={props.page} onClick={props.onClick}>
      {props.name}
    </NavLink>
  );
}
