import React from "react";
import { TextField } from "@mui/material";

const EditingRow = () => {
  return (
    <tr>
      <td>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
        />
      </td>
      <td>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
        />
      </td>
      <td>
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          name="phone"
        />
      </td>
    </tr>
  );
};

export default EditingRow;
