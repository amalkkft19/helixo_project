import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Table = () => {
  //***********useStates **************//////////////////////
  const [data, setData] = useState([]);

  //****************** */ fetching data***************************/////////////
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // console.log(response);
        setData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return <div>hhhh</div>;
};

export default Table;
