import React from "react";

import NavBar from "../components/NavBar";
import Table from "../components/Table";

import { UserTypeProvider } from "../components/context/UserType";

const Client = () => {
  return (
    <div>
      <UserTypeProvider value={{ user: "ADMIN_USER" }}>
        <NavBar />
        <Table />
      </UserTypeProvider>
    </div>
  );
};

export default Client;
