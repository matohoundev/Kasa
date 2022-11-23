import React, { useState } from "react";
import banner from "../../assets/img/banner.png";
import arrow from "../../../src/assets/icons/arrow.svg";

const Gallery = () => {
  const [nbImg, setNbImg] = useState(1);
  const [img, setImg] = useState(banner);

  const previousImg = () => {};
  const nextImg = () => {};

  return (
    <div className="gallery">
      <img className="gallery__image" src={img} alt="bannière" />
      {nbImg === 1 ? (
        <div className="box-arrow">
          <img
            src={arrow}
            className="arrow fa-chevron-left"
            alt="arrow-left"
            onClick={previousImg}
          />
          <img
            src={arrow}
            className="arrow fa-chevron-right"
            alt="arrow-right"
            onClick={nextImg}
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Gallery;
