import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { GroceryListApp } from "./components/GroceryListApp";
import { UserProvider } from "./components/nav/UserProvider";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <GroceryListApp />
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
