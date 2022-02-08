import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import DehazeIcon from "@mui/icons-material/Dehaze";

const NavBar = () => {
  // const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="navbar">
      <Link className="nav_id" to="/">
        Home
      </Link>
      <Link className="nav_id" to="/clients">
        Client
      </Link>
      <button>
        <DehazeIcon />
      </button>
    </div>
  );
};

export default NavBar;
