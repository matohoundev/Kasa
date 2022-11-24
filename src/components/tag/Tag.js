import React from "react";

const Tag = ({ name }) => {
  return (
    <div className="tag bg-main-color w-fit rounded">
      <p className="text-white font-normal relative">{name}</p>
    </div>
  );
};

export default Tag;
