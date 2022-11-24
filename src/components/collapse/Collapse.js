import React, { useState } from "react";
import arrow from "../../../src/assets/icons/arrow.svg";

const Collapse = ({ title, content }) => {
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
        <h4 className="font-normal">{title}</h4>
        {isOpen ? (
          <img src={arrow} className="fa-chevron-up" alt="arrow-up" />
        ) : (
          <img src={arrow} className="fa-chevron-down" alt="arrow-down" />
        )}
      </div>
      <div
        className={`bg-gray rounded-light ${
          isOpen ? `collapse__body--open ` : `collapse__body overflow-hidden`
        } ${title === "Équipements" && "flex flex-col"}`}
      >
        {title === "Équipements" && content ? (
          content.map((equipement) => (
            <span
              className={`main-color font-light ${
                isOpen
                  ? `collapse__span--open visible`
                  : `collapse__span opaque`
              }`}
              key={equipement}
            >
              {equipement}
            </span>
          ))
        ) : (
          <p
            className={`main-color font-light ${
              isOpen ? `collapse__text--open visible` : `collapse__text opaque`
            }`}
          >
            {content}
          </p>
        )}
      </div>
    </div>
  );
};

export default Collapse;
