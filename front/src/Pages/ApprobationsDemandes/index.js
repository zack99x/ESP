import React from "react";
import Table from "../../Components/Table";
import "./index.css";

export default function ApprobationsDemandes() {
  const theadData = [
    "Demandeur",
    "Ressources et type d'accès",
    "Durée d'accès",
    "Responsable",
    "Oui/Non",
  ];

  const tbodyData = [
    ["John", "john@email.com", "01/01/2021", "Dana", "X/v"],
    ["Sally", "sally@email.com", "12/24/2020", "Matthieu", "X/V"],
    ["Maria", "maria@email.com", "12/01/2020", "Gilles", "X/V"],
  ];
  return (
    <div className="approbations-demandes">
      <div className="approbations-demandes-title">
        <h3>Demandes à approuver</h3>
      </div>
      <div>
        <Table theadData={theadData} tbodyData={tbodyData} />
      </div>
    </div>
  );
}
