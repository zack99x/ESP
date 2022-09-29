import React, { useState } from "react";
import Button from "../../Components/Button";
import "./index.css";
import { useAuthcontext } from "../../Context/Authcontext";

export default function Home() {
  const [newpassword, setNewpassword] = useState("");
  const [confirmnewpassword, setConfirmnewpassword] = useState("");

  const { user } = useAuthcontext();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="profil">
      <img src="/eye-on.png" alt="eye-on" />
      <form className="form-profil" onSubmit={handleSubmit}>
        <div className="form-profil-input">
          <label>Adresse mail</label>
          <input type="email" value={`${user.email}`} disabled />
        </div>
        {/* <div className="form-profil-input">
            <label>Mot de passe actuel</label>
            <input type="password" placeholder="..." id="pwd" />
          </div> */}
        <div className="form-profil-input">
          <label>Nouveau mot de passe</label>
          <input
            type="password"
            placeholder="..."
            onChange={(e) => setNewpassword(e.target.value)}
            value={newpassword}
          />
        </div>
        <div className="form-profil-input">
          <label>Confirmer le nouveau mot de passe</label>
          <input
            type="password"
            placeholder="..."
            onChange={(e) => setConfirmnewpassword(e.target.value)}
            value={confirmnewpassword}
            className={`${
              // confirm et pas new ou confirm != new
              (confirmnewpassword &&
                newpassword &&
                confirmnewpassword !== newpassword) ||
              (confirmnewpassword && !newpassword)
                ? "error"
                : ""
            } `}
          />
          <p
            className={`wrong-password-alert ${
              // confirm et pas new ou confirm != new
              (confirmnewpassword &&
                newpassword &&
                confirmnewpassword !== newpassword) ||
              (confirmnewpassword && !newpassword)
                ? "active"
                : "inactive"
            } `}
          >
            Les mots de passe ne sont pas identiques
          </p>
        </div>

        <div className="form-profil-input">
          <label>Role</label>
          <input type="text" value="Manager" disabled />
        </div>
        <div className="form-profil-button">
          <Button
            type="submit"
            text={"Enregistrer"}
            disabled={!newpassword || confirmnewpassword !== newpassword}
          />
        </div>
      </form>
    </div>
  );
}
