import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./Navbar.css"


// look up how to make menu dynamic sliding in and out. 
const openClose = (open) => {
    if (open === true ){
        return{ transform: 'translateX(0%)'}
    }else {
       
        return { transform: 'translateX(-100%) '}
    
    }
}

export const Navbar = ({open}, {setOpen}) => {
    const history = useHistory()
    
    const logout = () => {
        localStorage.clear()
        history.push("/login")
    }
    
    //TODO: figure out how to fix closing of menu on click
    return (
    <>
        <div><button className="button--logout" onClick={()=>{logout()}}>log out</button></div>
        <div className="navbar__container menu" style={openClose(open)}>
        <ul className="navbar">
            <li className="navbar__item active" >
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/recipes" >Recipes</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/grocerylists">Grocery Lists</Link>
            </li>
        </ul>
        </div>
    </>
    )
}