import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="notfound flex flex-col justify-around text-center main-color">
      <div className="flex flex-col justify-start">
        <h1>404</h1>
        <h2 className="font-light">
          Oups ! La page que vous demandez n'existe pas.
        </h2>
      </div>
      <Link to="/" className="main-color">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default Notfound;
