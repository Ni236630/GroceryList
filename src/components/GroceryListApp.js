import React, { useState}  from "react";
import { Route, Redirect } from 'react-router-dom'
import { Login } from './auth/Login'
import { Register } from './auth/Register'
import { Navbar } from './nav/Navbar'
import { ApplicationViews } from "./ApplicationViews";
//import { useOnClickOutside } from './CloseMenu'
import './GroceryListApp.css'

// the below comments are for adding a off element click
//ref={node} <-- added on container__views
// useOnClickOutside(node, ()=> setOpen(false))
//const node = useRef()
export const GroceryListApp = () =>{
  
  const [ open, setOpen] = useState(false)
  return(
  <>
    <Route
      render={()=> {
        if(localStorage.getItem("grocery_customer")){
          return(
            <div className="container" >
    
            <span open={open} onClick={()=> setOpen(!open) }
                 className="menu__button--container">
              <div className='menu__button'></div>
              <div className='menu__button'></div>
              <div className='menu__button'></div>
            </span>
            
            <div className='container__views'>
              
              <Navbar open={open} setOpen={setOpen} />
             
            </div>
              <ApplicationViews open={open} setOpen={setOpen}/>
            </div>
          
          )
        } else {
          return <Redirect to="/login" />
        }
      }}
    />
    <Route path ='/login'>
      <Login />
    </Route>
    <Route path='/register'>
      <Register />
    </Route>
      
  </>)
}
