import { createContext } from "react";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import { data } from "autoprefixer";

const AuthContext = createContext("");
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const storageTokens = JSON.parse(localStorage.getItem("authTokens"));
  const storageUsername = localStorage.getItem("username");
  const storageUserId = localStorage.getItem("userid");
  const [authTokens, setAuthTokens] = useState(storageTokens || null);
  const [username, setUsername] = useState(storageUsername || null);
  const [userId, setUserId] = useState(storageUserId || null);
  const login = async (email, password) => {
    const response = await fetch(`${API_URL}/token/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      setAuthTokens(data);
      localStorage.setItem("authTokens", JSON.stringify(data));
      const decodeUsername = jwt_decode(data.access).username;
      setUsername(decodeUsername);
      localStorage.setItem("username", decodeUsername);
      const userId = jwt_decode(data.access).user_id;
      setUserId(userId);
      localStorage.setItem("userid", userId);
    } else {
      throw "Unable to login";
    }
  };

  const register = async (email, username, password1, password2) => {
    const response = await fetch(`${API_URL}/token/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password1: password1,
        password2: password2,
        username: username,
      }),
    });
  };

  const logout = () => {
    setUsername(null);
    setAuthTokens(null);
    localStorage.removeItem("username");
    localStorage.removeItem("authTokens");
  };

  const verify = async (accessToken) => {
    const response = await fetch(`${API_URL}/token/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: accessToken,
      }),
    });
    if (response.ok) {
      return true;
    }
    return false;
  };

  const refresh = async (refreshToken) => {
    const response = await fetch(`${API_URL}/token/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: refreshToken,
      }),
    });
    if (response.ok) {
      const newTokens = await response.json();
      setAuthTokens(newTokens);
      localStorage.setItem("authTokens", JSON.stringify(newTokens));
      const decodeUsername = jwt_decode(newTokens.access).username;
      setUsername(decodeUsername);
      localStorage.setItem("username", decodeUsername);
      const userId = jwt_decode(data.access).user_id;
      localStorage.setItem("userid", userId);
      return true;
    }
    return false;
  };

  const contextData = {
    login,
    username,
    verify,
    refresh,
    logout,
    register,
    userId,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
