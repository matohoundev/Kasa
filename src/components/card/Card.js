import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Fragment>
      <Link to="/" className="card">
        <img
          src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
          className="rounded object-cover w-full h-full"
          alt="cover"
        />
        <div className="card__content absolute w-full">
          <h3 className="card__title text-white text-lg font-medium">
            Titre de la location
          </h3>
        </div>
      </Link>
    </Fragment>
  );
};

export default Card;
