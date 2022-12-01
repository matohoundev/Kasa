import React, { useState, useEffect } from "react";
import arrow from "../../../src/assets/icons/arrow.svg";

const Gallery = ({ pictures }) => {
  const [currentPicture, setCurrentPicture] = useState([]);

  useEffect(() => {
    setCurrentPicture(pictures && pictures[0]);
  }, [pictures]);

  const ArrowNext = () => {
    const index = pictures.indexOf(currentPicture);
    if (index === pictures.length - 1) {
      setCurrentPicture(pictures[0]);
    } else {
      setCurrentPicture(pictures[index + 1]);
    }
  };

  const ArrowPrev = () => {
    const index = pictures.indexOf(currentPicture);
    if (index === 0) {
      setCurrentPicture(pictures[pictures.length - 1]);
    } else {
      setCurrentPicture(pictures[index - 1]);
    }
  };

  return (
    <div className="gallery">
      <img className="gallery__image" src={currentPicture} alt="bannière" />
      {pictures && pictures.length > 1 ? (
        <div className="box-arrow">
          <img
            src={arrow}
            className="arrow fa-chevron-left"
            alt="arrow-left"
            onClick={ArrowPrev}
          />
          <img
            src={arrow}
            className="arrow fa-chevron-right"
            alt="arrow-right"
            onClick={ArrowNext}
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Gallery;
