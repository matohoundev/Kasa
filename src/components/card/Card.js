import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Card = ({ id, title, img }) => {
  return (
    <Fragment>
      <Link to={`/accommodation/${id}`} className="card">
        <img
          src={img}
          className="rounded object-cover w-full h-full"
          alt="cover"
        />
        <div className="card__content absolute w-full">
          <h3 className="card__title text-white text-lg font-medium">
            {title}
          </h3>
        </div>
      </Link>
    </Fragment>
  );
};

export default Card;
