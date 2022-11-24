import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ApiServices from "../../../services/ApiServices/ApiServices";

// component
import Collapse from "../../../components/collapse/Collapse";
import Gallery from "../../../components/gallery/Gallery";
import Tag from "../../../components/tag/Tag";

// image
import starFill from "../../../assets/icons/star-fill.svg";
import starnoFill from "../../../assets/icons/star-nofill.svg";

const Accommodation = () => {
  const [accommodation, setAccommodation] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const apiServices = new ApiServices();
    apiServices.getLogement(id).then((data) => setAccommodation(data));
  }, []);

  const {
    title,
    rating,
    location,
    description,
    tags,
    pictures,
    equipments,
    host,
  } = accommodation;

  return (
    <div className="accommodation">
      <Gallery pictures={pictures} />
      <div className="accommodation__body">
        <div className="info main-color">
          <div className="info__header">
            <h1 className="font-normal text-lg">{title}</h1>
            <h2 className="font-normal text-sm">{location}</h2>
            <div className="box-tag flex gap-x-md">
              {tags && tags.map((tag) => <Tag key={tag} name={tag} />)}
            </div>
          </div>
          <div className="info__other">
            <div className="box-star flex gap-x-sm">
              {rating &&
                Array.from({ length: 5 }, (_, i) => (
                  <img
                    key={i}
                    src={i < rating ? starFill : starnoFill}
                    alt="star"
                  />
                ))}
            </div>
            <div className="box-host flex">
              <p className="font-normal">{host && host.name}</p>
              <img
                src={host && host.picture}
                alt="portrait host"
                className="photo"
              />
            </div>
          </div>
        </div>
        <div className="contain-collapse">
          <Collapse title={"Description"} content={description} />
          <Collapse title={"Équipements"} content={equipments} />
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
