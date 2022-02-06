import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./Input.css";

const Inputs = () => {
  return (
    <div>
      <form>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
        />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          name="phone"
        />
        <Button className="btn_add" variant="contained" type="submit">
          ADD
        </Button>
      </form>
    </div>
  );
};

export default Inputs;
