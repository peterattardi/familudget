import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

const LoginPageLogic = () => {
  const { login, register } = useContext(AuthContext);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [password1, setPassword1] = useState(null);
  const [password2, setPassword2] = useState(null);
  const [username, setUsername] = useState(null);
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [wrongPassword1, setWrongPassword1] = useState(false);
  const [wrongPassword2, setWrongPassword2] = useState(false);
  const [wrongUsername, setWrongUsername] = useState(false);
  const [wrongForm, setWrongForm] = useState(false);
  const [wrongFormReg, setWrongFormReg] = useState(false);
  const navigate = useNavigate();

  const handleFormChange = (e) => {
    const tagName = e.target.name;
    switch (tagName) {
      //Login
      case "email":
        setEmail(e.target.value);
        if (!e.target.value.match("[^@]+@[^@]+.[^@]+")) {
          setWrongEmail(true);
        } else {
          setWrongEmail(false);
        }
        break;
      case "password":
        setPassword(e.target.value);
        break;
      //Register
      case "username":
        setUsername(e.target.value);
        break;
      case "password1":
        setPassword1(e.target.value);
        if (
          !e.target.value.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")
        ) {
          setWrongPassword1(true);
        } else {
          setWrongPassword1(false);
        }
        break;
      case "password2":
        setPassword2(e.target.value);
        if (e.target.value !== password1) {
          setWrongPassword2(true);
        } else {
          setWrongPassword2(false);
        }
        break;

      default:
        break;
    }
  };

  const loginUser = async (e) => {
    e.preventDefault();
    if (wrongEmail) {
      return;
    }

    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setWrongForm(true);
    }
  };

  const registerUser = async (e) => {
    e.preventDefault();
    if (wrongEmail || wrongPassword1 || wrongPassword2 || wrongUsername) {
      return;
    }

    try {
      await register(email, username, password1, password2);
      await login(email, password1);
      navigate("/");
    } catch (err) {
      setWrongFormReg(true);
    }
  };

  return {
    loginUser,
    handleFormChange,
    registerUser,
    wrongEmail,
    wrongPassword,
    wrongPassword1,
    wrongPassword2,
    wrongUsername,
    wrongForm,
    wrongFormReg,
  };
};

export default LoginPageLogic;
