import React, { useState, useEffect } from "react";
import Card from "../../components/card/Card";
import ApiServices from "../../services/ApiServices/ApiServices";

import banner from "../../assets/img/banner.png";
import Banner from "../../components/banner/Banner";

const Main = () => {
  const [allAccommodation, setAllAccommodation] = useState([]);

  useEffect(() => {
    const apiServices = new ApiServices();
    apiServices.getLogements().then((data) => setAllAccommodation(data));
  }, []);

  return (
    <header className="home flex flex-col">
      <Banner img={banner} content={"Chez vous, partout et ailleurs"} />
      <div className="box-card">
        {allAccommodation.map((accommodation) => (
          <Card
            key={accommodation.id}
            id={accommodation.id}
            title={accommodation.title}
            img={accommodation.cover}
          />
        ))}
      </div>
    </header>
  );
};

export default Main;
