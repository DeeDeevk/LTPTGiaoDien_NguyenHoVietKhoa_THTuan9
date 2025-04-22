import React, { useState } from "react";
import LoginForm from "./LoginForm";
import Welcome from "./Welcome";
import "./ToggleLogin.css";

function ToggleLogin() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (username) => {
    setUser({ name: username });
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const setUserInfo = (info) => {
    setUser((prevUser) => ({ ...prevUser, ...info }));
  };

  return (
    <div className="app">
      {!isLoggedIn ? (
        <LoginForm login={login} />
      ) : (
        <Welcome user={user} logout={logout} setUserInfo={setUserInfo} />
      )}
    </div>
  );
}

export default ToggleLogin;
