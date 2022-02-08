import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div id="navbar_custom">
      <Link className="nav_id" to="/">
        Home
      </Link>
      <Link className="nav_id" to="/clients">
        Client
      </Link>
    </div>
  );
};

export default NavBar;
