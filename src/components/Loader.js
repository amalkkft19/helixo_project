import React from "react";
import LoadingImg from "../loadingImg/LoadingImg.gif";

const Loader = () => {
  const loadingStyles = {};
  return (
    <div>
      <img src={LoadingImg} alt="Loading..." />
    </div>
  );
};

export default Loader;
