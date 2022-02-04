import React from "react";
import "./AboutCatering.css";

const AboutCatering = () => {
  return (
    <div>
      <div className="container">
        <img
          src="https://www.w3schools.com/w3images/tablesetting2.jpg"
          alt="abtcat_img"
          className="img_catering"
        />
        <div className="text_container">
          <h1>About Catering</h1>
          <h4>Tradition since 1889</h4>
          <p className="para_one">
            The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor
            sit amet, consectetur adipiscing elit consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.We only use seasonal ingredients.
          </p>
          <p className="para_two">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum consectetur adipiscing
            elit, sed do eiusmod temporincididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCatering;
