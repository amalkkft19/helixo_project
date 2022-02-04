import React from "react";
import AboutCatering from "../components/AboutCatering";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <AboutCatering />
    </div>
  );
};

export default Home;
