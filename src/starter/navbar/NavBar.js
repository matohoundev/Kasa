import React from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/icons/logo.svg";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center">
      <Link to="/" title="Home">
        <img className="logo" src={logo} alt="Kasa" />
      </Link>

      <div className="main-nav">
        <ul className="flex test">
          <li>
            <NavLink to="/" className="main-color" title="Home">
              ACCUEIL
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className="main-color no-underline"
              title="About"
            >
              À PROPOS
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
