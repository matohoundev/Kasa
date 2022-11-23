import React from "react";

const Banner = ({ img, content }) => {
  return (
    <div className={`banner relative overflow-hidden bg-black`}>
      <img src={img} className="object-cover" alt="bannière" />
      {content ? (
        <h1 className="absolute top-md left-md w-lg text-white font-medium text-center">
          {content}
        </h1>
      ) : null}
    </div>
  );
};

export default Banner;
