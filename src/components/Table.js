import React, { Fragment } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Table.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ReadOnlyRow from "./ReadOnlyRow";
import EditingRow from "./EditingRow";

const Table = () => {
  //***********useStates **************//////////////////////
  const [datas, setDatas] = useState([]);
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [editDataId, setEditiDataId] = useState(null);

  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  //******************fetching data***************************/////////////
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // console.log(response);
        setDatas(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //******************* input form onChange function**********************************

  const onHandleFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...formInput };
    newFormData[fieldName] = fieldValue;
    setFormInput(newFormData);
    console.log(newFormData);
  };

  // *****************************handling edited form*************************************

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
    console.log(newFormData);
  };

  // *********************Adding form*************************************

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newData = {
      id: Date.now(),
      name: formInput.name,
      email: formInput.email,
      phone: formInput.phone,
    };

    const newDatas = [...datas, newData];
    setDatas(newDatas);
  };

  //**************************Submitting edited file************************** */

  const onEditFormSubmit = (event) => {
    event.preventDefault();
    const editedData = {
      id: Date.now(),
      name: editFormData.name,
      email: editFormData.email,
      phone: editFormData.phone,
    };
    // console.log(editedData);

    const newDatas = [...datas];

    const index = datas.findIndex((data) => data.id === editDataId);

    newDatas[index] = editedData;
    setDatas(newDatas);
    setEditiDataId(null);
  };

  // ***********************Handling edit click**********************

  const handleEditClick = (event, data) => {
    event.preventDefault();
    setEditiDataId(data.id);
    // console.log(data.id);

    const formValues = {
      name: data.name,
      email: data.email,
      phone: data.phone,
    };
    setEditFormData(formValues);
  };

  //*************Handling cancel button */

  const handleCancelClick = () => {
    setEditiDataId(null);
  };

  //**************Handling delete button */

  const handleDeleteClick = (dataId) => {
    const newDatas = [...datas];
    const index = datas.findIndex((data) => data.id === dataId);
    newDatas.splice(index, 1);
    setDatas(newDatas);
  };

  return (
    <div className="table_container">
      <form onSubmit={onFormSubmit}>
        <TextField
          onChange={onHandleFormChange}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
        />
        <TextField
          onChange={onHandleFormChange}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
        />
        <TextField
          onChange={onHandleFormChange}
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          name="phone"
        />
        <Button className="btn_add" variant="contained" type="submit">
          ADD
        </Button>
      </form>
      <form onSubmit={onEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {datas.map((data) => {
              // console.log(data);
              return (
                <Fragment>
                  {editDataId === data.id ? (
                    <EditingRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      data={data}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Table;
