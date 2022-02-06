import React from "react";

const ReadOnlyRow = ({ data }) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
    </tr>
  );
};

export default ReadOnlyRow;
