import React from "react";
import LoadingImg from "../loadingImg/LoadingImg.gif";

const Loader = () => {
  const loadingStyles = {
    width: "60px",
    height: "60px",
    display: " block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "45vh",
  };
  return (
    <div>
      <img src={LoadingImg} alt="Loading..." style={loadingStyles} />
    </div>
  );
};

export default Loader;
