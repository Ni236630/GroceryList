import React, { useState, useRef }  from "react";
import { Navbar } from './nav/Navbar'
import { ApplicationViews } from "./ApplicationViews";
//import { useOnClickOutside } from './CloseMenu'
import './Home.css'

// the below comments are for adding a off element click
//ref={node} <-- added on container__views
// useOnClickOutside(node, ()=> setOpen(false))
//const node = useRef()
export const Home = () =>{
  const [ open, setOpen] = useState(false)
  
  
  return  <div className="container" >
    
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
  
  
 }

  
