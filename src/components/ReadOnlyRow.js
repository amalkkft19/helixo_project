import React from "react";
import Button from "@mui/material/Button";

const ReadOnlyRow = ({ data, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
      <td>
        <Button size="small" onClick={(event) => handleEditClick(event, data)}>
          Edit
        </Button>
        <Button size="small" onClick={() => handleDeleteClick(data.id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
