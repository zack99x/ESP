import React from "react";
import NavItem from "../../Components/NavItem";
import { Link } from "react-router-dom";
import "./index.css";
import { useAuthcontext } from "../../Context/Authcontext";

export default function Sidebar() {
  function handleClick(e) {
    if (
      document.getElementsByClassName("dropdown-container")[0].style.display ===
      "block"
    ) {
      document.getElementsByClassName("dropdown-container")[0].style.display =
        "none";
    } else {
      document.getElementsByClassName("dropdown-container")[0].style.display =
        "block";
    }
  }

  const { logout } = useAuthcontext();

  return (
    <div className="App-sidebar">
      <div className="App-logo">
        <img src="/IAM-logo.png" className="App-img" alt="app logo" />
        <Link to="/home" className="App-title">
          I A M
        </Link>
      </div>
      <div className="App-navbar">
        <NavItem page="/profil" name="Profil" />
        <NavItem page="/home" name="Mes accès" />
        <NavItem page="/demandeAcces" name="Demandes d'accès" />
        <NavItem
          page="/approbations"
          name="Approbations"
          onClick={handleClick}
        />
        <div className="dropdown-container">
          <NavItem page="/approbationsSuivi" name="Suivi des approbations" />
          <NavItem page="/approbationsDemandes" name="Demandes à approuver" />
        </div>
        <NavItem page="/historique" name="Historique" />
        <NavItem page="/statistiques" name="Statistiques" />
      </div>
      <div className="logout">
        <NavItem page="/" name="Déconnexion" onClick={(e) => logout()} />
      </div>
    </div>
  );
}
