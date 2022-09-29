import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Affiche la sidebar
    document.getElementsByClassName("App-sidebar")[0].style.display = "flex";
    // Afiche le header
    document.getElementsByClassName("App-header")[0].style.display = "flex";
    // Affiche le whitespace
    document.getElementsByClassName("white-space")[0].style.display = "flex";
    document.getElementsByClassName("white-space")[1].style.display = "flex";
  });
  return <p>This is home</p>;
}
