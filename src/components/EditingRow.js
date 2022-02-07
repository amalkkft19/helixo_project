import React from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

const EditingRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          onChange={handleEditFormChange}
          value={editFormData.name}
        />
      </td>
      <td>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleEditFormChange}
          value={editFormData.email}
        />
      </td>

      <td>
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          name="phone"
          onChange={handleEditFormChange}
          value={editFormData.phone}
        />
      </td>
      <td>
        <Button
          style={{ marginLeft: "30px" }}
          variant="contained"
          color="success"
          type="submit"
        >
          Save
        </Button>
        <Button
          style={{ marginLeft: "30px" }}
          variant="outlined"
          color="success"
          type="button"
          onClick={handleCancelClick}
        >
          cancel
        </Button>
      </td>
    </tr>
  );
};

export default EditingRow;
