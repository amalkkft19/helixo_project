import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Table.css";

const Table = () => {
  //***********useStates **************//////////////////////
  const [datas, setDatas] = useState([]);

  //****************** */ fetching data***************************/////////////
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // console.log(response);
        setDatas(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="table_container">
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
            console.log(data);
            return (
              <tr>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
