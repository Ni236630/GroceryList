import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
        </ul>
    )
}