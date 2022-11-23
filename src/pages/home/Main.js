import React from "react";
import Card from "../../components/card/Card";

import banner from "../../assets/img/banner.png";
import Banner from "../../components/banner/Banner";

const Main = () => {
  return (
    <header className="home flex flex-col">
      <Banner img={banner} content={"Chez vous, partout et ailleurs"} />
      <div className="box-card">
        <Card />
      </div>
    </header>
  );
};

export default Main;
