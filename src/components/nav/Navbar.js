import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "./UserProvider";
import "./Navbar.css";
import LogoutButton from "../icons/Logout";

//allows adjustment of menu onclick
const openClose = (open) => {
  if (open === true) {
    return { transform: "translateX(0%)" };
  } else {
    return { transform: "translateX(-100%) " };
  }
};

export const Navbar = ({ open }, { setOpen }) => {
  const { users, getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //match localstorage id with user id
  const currentUser = users.find(
    (u) => u.id === parseInt(localStorage.getItem("grocery_customer"))
  );

  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };

  //TODO: figure out how to fix closing of menu on click
  return (
    <>
      <div className="logout">
        <h1 className="welcomeBanner"> Welcome, {currentUser ? currentUser.name : "Friend"}</h1>
        <div className="logout__container">
          Logout{" "}
          <div
            onClick={() => {
              logout();
            }}
          >
            <LogoutButton className="button--logout" />
          </div>
        </div>
      </div>
      <div className="navbar__container menu" style={openClose(open)}>
        <ul className="navbar">
          <li className="navbar__item active">
            <Link className="navbar__link" to="/">
              Home
            </Link>
          </li>
          <li className="navbar__item active">
            <Link className="navbar__link" to="/recipes">
              Recipes
            </Link>
          </li>
          <li className="navbar__item active">
            <Link className="navbar__link" to="/grocerylists">
              Grocery Lists
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
