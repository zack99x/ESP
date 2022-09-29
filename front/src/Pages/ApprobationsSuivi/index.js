import React from "react";
import Table from "../../Components/Table";

export default function ApprobationsSuivi() {
  const theadData = [
    "Demandeur",
    "Ressources et type d'accès",
    "Durée d'accès",
    "Statut responsable",
  ];

  const tbodyData = [
    ["John", "john@email.com", "01/01/2021", "Dana en attente"],
    ["Sally", "sally@email.com", "12/24/2020", "Matthieu accepté"],
    ["Maria", "maria@email.com", "12/01/2020", "Gilles en attente"],
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
