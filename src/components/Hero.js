import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div className="hero_img">
        <img
          src="https://www.w3schools.com/w3images/hamburger.jpg"
          alt="banner_img"
        />
        <h3 className="hero_text">Le Catering</h3>
      </div>
    </div>
  );
};

export default Hero;
