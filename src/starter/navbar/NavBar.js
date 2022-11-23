import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/icons/logo.svg";

const NavBar = () => {
  const [active, setActive] = useState(false);

  const clickedLink = (e) => {
    if (e.target.id !== active) {
      setActive(e.target.id);
    }
  };

  return (
    <nav className="flex justify-between items-center">
      <Link to="/" title="Home" onClick={clickedLink}>
        <img className="logo" src={logo} alt="Kasa" />
      </Link>

      <div className="main-nav">
        <ul className="flex test">
          <li>
            <NavLink
              id="home"
              to="/"
              className={`${active ? "" : "underline"} main-color`}
              title="Home"
              onClick={(e) => clickedLink(e)}
            >
              ACCUEIL
            </NavLink>
          </li>

          <li>
            <NavLink
              id="about"
              to="/about"
              className={`${active ? "underline" : ""} main-color`}
              title="About"
              onClick={(e) => clickedLink(e)}
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
