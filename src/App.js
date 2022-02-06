import React from "react";
import Home from "./containers/Home";
import Client from "./containers/Client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />

        <Route path="/clients" element={<Client />} />
      </Routes>
    </Router>
  );
};

export default App;
