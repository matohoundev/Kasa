import { Route, Routes } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";
import NavBar from "./starter/navbar/NavBar";
import Footer from "./starter/footer/Footer";
import Main from "./pages/home/Main";
import About from "./pages/about/About";
import Accommodation from "./pages/Sheet/Accommodation/Accommodation";
import NotFound from "./pages/404/NotFound";

function App() {
  return (
    <Fragment>
      <div className="wrapper">
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/accommodation/:id" element={<Accommodation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
