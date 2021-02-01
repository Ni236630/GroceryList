import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

// look up how to make menu dynamic sliding in and out. 
export const Navbar = ({open}, {setOpen}) => {

    const openClose = (open) => {
        if (open === true ){
            return{ transform: 'translateX(0%)'}
        }else {
            return { transform: 'translateX(-100%)'}
        }
    }
    const close = () => setOpen
    //TODO: figure out how to fix closing of menu on click
    return (
    <>
     
        <div className="navbar__container menu" style={openClose(open)}>
        <ul className="navbar">
            <li className="navbar__item active" >
                <Link className="navbar__link" to="/" onClick={close}>Home</Link>
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