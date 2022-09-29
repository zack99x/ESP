import React, { useState, useEffect } from "react";
import Button from "../../Components/Button";
import logo from "../../images/logo.png";
import "./index.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthcontext } from "../../Context/Authcontext";

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [showpassword, setShowpassword] = useState(false);

  const { updateToken, updateUser } = useAuthcontext();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/login/`, { email: id, password })
      .then((res) => {
        updateToken(res.data.token);
        updateUser(res.data.token);
        navigate("/home");
      })
      .catch((err) => {
        setError(err);
        setPassword("");
        setShowpassword(false);
      });
  }

  useEffect(() => {
    // Cache la sidebar
    document.getElementsByClassName("App-sidebar")[0].style.display = "none";
    // Cache la headbar
    document.getElementsByClassName("App-header")[0].style.display = "none";
    //Cache le white space
    document.getElementsByClassName("white-space")[0].style.display = "none";
    document.getElementsByClassName("white-space")[1].style.display = "none";
  });

  return (
    <div className="login">
      <div className="login-connexion">
        <h2 className={error ? "login-error" : ""}>Connexion</h2>
        {error ? (
          <p className="login-error">
            Le couple identifiant/mot de passe est incorrect.
          </p>
        ) : (
          <></>
        )}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-input">
            <label>Identifiant</label>
            <input
              type="text"
              onChange={(e) => setId(e.target.value)}
              value={id}
            />
          </div>
          <div className="form-input">
            <label>Mot de passe</label>
            <div className="input-password">
              <input
                type={showpassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />

              <img
                src="/eye-off.png"
                alt="eye-off"
                className={showpassword ? "active" : "inactive"}
                onClick={() => setShowpassword(false)}
              />
              <img
                src="/eye-on.png"
                alt="eye-on"
                className={showpassword ? "inactive" : "active"}
                onClick={() => setShowpassword(true)}
              />
            </div>
          </div>
          <div className="login-button">
            <Button
              type="submit"
              text="Continuer"
              disabled={!id || !password}
            />
          </div>
        </form>
      </div>
      <div className="login-logo">
        <img src={logo} alt="app logo" />
      </div>
    </div>
  );
}
