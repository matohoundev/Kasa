import React from "react";
import Banner from "../../components/banner/Banner";
import Collapse from "../../components/collapse/Collapse";

import Aboutbanner from "../../assets/img/banner-about.png";

const About = () => {
  return (
    <div className="about flex flex-col">
      <Banner img={Aboutbanner} />
      <div className="box-collapse flex flex-col items-center">
        <Collapse />
        <Collapse />
      </div>
    </div>
  );
};

export default About;
