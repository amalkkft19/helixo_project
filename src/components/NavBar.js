import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#fff",
    height: "50px",
    /* position: fixed; */
    width: "100%",
    zIndex: " 10",

    boxShadow: " 0 2px 4px 0 rgba(0, 0, 0, 0.2)",
  },
});

const NavBar = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.navbar}>
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
