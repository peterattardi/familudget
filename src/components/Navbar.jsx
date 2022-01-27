import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { username, logout } = useContext(AuthContext);

  const showNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <header className="flex flex-col items-center w-full">
      <div className="items-center flex justify-between px-6 py-4 gap-6 bg-black w-full">
        <div className="container px-4 py-2 text-center">
          <p className="text-white w-min xs:text-xl sm:text-3xl font-bold text-left">
            familudget
          </p>
        </div>
        <div
          onClick={showNav}
          className="flex items-center group hover:bg-white justify-between sm:px-4 sm:py-2 sm:gap-4 xs:py-1 xs:px-4 xs:gap-2 border-solid border  animation border-white rounded-lg"
        >
          <p className="text-center group-hover:text-black text-white">
            {username}
          </p>
        </div>
      </div>
      {isNavOpen && (
        <nav className="flex w-full bg-black text-white items-center">
          <ul className="flex flex-col w-full mt-20 mb-20 items-center justify-center gap-8">
            <Link to="settings/" className="navbar-link">
              <li>Settings</li>
            </Link>
            <Link to="login/" className="navbar-link" onClick={logout}>
              <li>Log Out</li>
            </Link>
          </ul>
        </nav>
      )}
    </header>
  );
};
