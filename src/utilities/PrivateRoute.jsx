import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import React, { useState, useEffect } from "react";
import { Outlet, Route, useNavigate } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";

const PrivateRoute = ({ children }) => {
  const { verify, refresh } = useContext(AuthContext);
  const [authorized, setAuthorized] = useState(false);
  const verifyUser = () => {
    const storageTokens = JSON.parse(localStorage.getItem("authTokens"));
    if (storageTokens) {
      verify(storageTokens.access).then((result) => {
        if (result) {
          setAuthorized(true);
        } else {
          tryToRefreshToken(storageTokens.refresh);
        }
      });
    } else {
      setAuthorized(false);
    }
  };

  const tryToRefreshToken = (refreshToken) => {
    refresh(refreshToken).then((result) => {
      if (result) {
        setAuthorized(true);
      }
    });
  };

  useEffect(() => {
    verifyUser();
  });

  return authorized ? children : <LoginPage />;
};

export default PrivateRoute;
