import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {
    return (
      <>
      
        <div className="navbar__container menu">
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/recipes">Recipes</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/grocerylists">Grocery Lists</Link>
            </li>
        </ul>
        </div>
        </>
    )
}