import React from "react";
import Card from "../../components/card/Card";

import banner from "../../assets/img/banner.png";

const Main = () => {
  return (
    <header className="home flex flex-col">
      <div className="banner relative overflow-hidden bg-black">
        <img src={banner} className="object-cover" alt="bannière" />

        <h1 className="absolute top-md left-md w-lg text-white font-medium text-center">
          Chez vous, partout et ailleurs
        </h1>
      </div>
      <div className="box-card flex justify-between flex-wrap">
        <Card />
      </div>
    </header>
  );
};

export default Main;
