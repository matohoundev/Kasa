import React, { useState } from "react";
import arrow from "../../../src/assets/icons/arrow.svg";

const Collapse = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div
        className="collapse__header flex items-center justify-between bg-main-color text-white rounded"
        onClick={openCollapse}
      >
        <h4 className="font-normal">Fiabilité</h4>
        {isOpen ? (
          <img src={arrow} className="fa-chevron-up" alt="arrow-up" />
        ) : (
          <img src={arrow} className="fa-chevron-down" alt="arrow-down" />
        )}
      </div>
      <div
        className={`bg-gray rounded-light ${
          isOpen ? `collapse__body--open ` : `collapse__body overflow-hidden`
        }`}
      >
        <p
          className={`main-color font-light ${
            isOpen ? `collapse__text--open visible` : `collapse__text opaque`
          }`}
        >
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </div>
    </div>
  );
};

export default Collapse;
