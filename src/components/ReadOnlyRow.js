import React from "react";
import Button from "@mui/material/Button";

const ReadOnlyRow = ({
  data,
  handleEditClick,
  handleDeleteClick,
  userType,
}) => {
  const renderButtons = (userType) => {
    // console.log(userType);
    return (
      userType === "ADMIN_USER" && (
        <td>
          <Button
            size="small"
            onClick={(event) => handleEditClick(event, data)}
          >
            Edit
          </Button>
          <Button size="small" onClick={() => handleDeleteClick(data.id)}>
            Delete
          </Button>
        </td>
      )
    );
  };

  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
      {renderButtons(userType)}
    </tr>
  );
};

export default ReadOnlyRow;
