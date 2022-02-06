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
    // console.log(newFormData);
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
      <form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>

          <tbody>
            {datas.map((data) => {
              // console.log(data);
              return (
                <Fragment>
                  <EditingRow />
                  <ReadOnlyRow data={data} />
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
