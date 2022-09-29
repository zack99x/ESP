import React from "react";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Profil from "./Pages/Profil";
import DemandeAcces from "./Pages/DemandeAcces";
import Approbations from "./Pages/Approbations/index";
import ApprobationsDemandes from "./Pages/ApprobationsDemandes";
import ApprobationsSuivi from "./Pages/ApprobationsSuivi";
import Historique from "./Pages/Historique";
import Statistiques from "./Pages/Statistiques";
import Sidebar from "./Pages/Sidebar";
import Header from "./Pages/Header";
import "./App.css";
import { AuthProvider } from "./Context/Authcontext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Sidebar />
          <div className="white-space"></div>
          <div className="main">
            <Header />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/profil" element={<Profil />} />
              <Route path="/demandeAcces" element={<DemandeAcces />} />
              <Route path="/approbations" element={<Approbations />} />
              <Route
                path="/approbationsDemandes"
                element={<ApprobationsDemandes />}
              />
              <Route
                path="/approbationsSuivi"
                element={<ApprobationsSuivi />}
              />
              <Route path="/historique" element={<Historique />} />
              <Route path="/statistiques" element={<Statistiques />} />
            </Routes>
          </div>
          <div className="white-space"></div>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
