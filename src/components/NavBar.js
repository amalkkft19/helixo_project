import React from "react";
import { Link } from "react-router-dom";

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
  nav_id: {
    marginRight: "40px",
    fontWeight: "500",
    fontSize: "16px",
    fontFamily: "Roboto",
    cursor: "pointer",
    color: " rgb(33, 33, 34)",
    textDecoration: " none",
    "&:hover": { color: "rgb(116, 32, 67)" },
  },
});

const NavBar = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.navbar}>
      <Link className={classes.nav_id} to="/">
        Home
      </Link>
      <Link className={classes.nav_id} to="/clients">
        Client
      </Link>
    </div>
  );
};

export default NavBar;
