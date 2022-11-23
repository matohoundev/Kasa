import React from "react";
import { Link } from "react-router-dom";

import logoW from "../../assets/icons/logoW.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center bg-black gap-y-lg w-full">
      <Link to="/">
        <img src={logoW} alt="Kasa" />
      </Link>

      <p className="text-white">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
