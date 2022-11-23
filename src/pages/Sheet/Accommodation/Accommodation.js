import React from "react";
import Collapse from "../../../components/collapse/Collapse";
import Gallery from "../../../components/gallery/Gallery";
import Tag from "../../../components/tag/Tag";
import starFill from "../../../assets/icons/star-fill.svg";
import starnoFill from "../../../assets/icons/star-nofill.svg";

const Accommodation = () => {
  return (
    <div className="accomodation">
      <Gallery />
      <div className="accomodation__body">
        <div className="info main-color">
          <div className="info__header">
            <h1 className="font-normal text-lg">
              Cozy loft on the Canal Saint-Martin
            </h1>
            <h2 className="font-normal text-sm">Paris, Île-de-France</h2>
            <div className="box-tag flex gap-x-md">
              <Tag />
              <Tag />
            </div>
          </div>
          <div className="info__other">
            <div className="box-star flex gap-x-sm">
              <img src={starFill} className="" alt="star" />
              <img src={starFill} className="" alt="star" />
              <img src={starFill} className="" alt="star" />
              <img src={starnoFill} className="" alt="star" />
              <img src={starnoFill} className="" alt="star" />
            </div>
            <div className="box-host flex">
              <p className="font-normal">Alexandre Dumas</p>
              <div className="photo"></div>
            </div>
          </div>
        </div>
        <div className="contain-collapse">
          <Collapse />
          <Collapse />
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
