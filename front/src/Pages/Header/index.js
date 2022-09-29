import React from "react";
import "./index.css";
import { useAuthcontext } from "../../Context/Authcontext";

export default function Header() {
  const { user } = useAuthcontext();

  return (
    <div className="App-header">
      <p>{` ${user.firstname} ${user.lastname}`}</p>
    </div>
  );
}
