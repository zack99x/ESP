import React, { useState } from "react";
import axios from "axios";

const Authcontext = React.createContext({
  token: null,
});

function useAuthProvider() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({
    id: null,
    email: null,
    firstname: null,
    lastname: null,
  });

  function updateToken(newtoken) {
    setToken(newtoken);
  }

  function updateUser(providedToken) {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/me/`, {
        headers: { Authorization: `Token ${providedToken || token}` },
      })
      .then((res) => {
        setUser({
          id: res.data.id,
          email: res.data.email,
          firstname: res.data.first_name,
          lastname: res.data.last_name,
        });
      })
      .catch((err) => console.error(err));
    //setUser();
  }

  function logout() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/logout/`, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((res) => {
        setToken(null);
        setUser({
          id: null,
          email: null,
          firstname: null,
          lastname: null,
        });
      })
      .catch((err) => console.error(err));
  }

  return {
    token,
    updateToken,
    user,
    updateUser,
    logout,
  };
}

export const AuthProvider = ({ children }) => {
  const context = useAuthProvider();
  return (
    <Authcontext.Provider value={context}>{children}</Authcontext.Provider>
  );
};

export const useAuthcontext = () => React.useContext(Authcontext);
