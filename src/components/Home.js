import React, { useState, useRef }  from "react";
import { Navbar } from './nav/Navbar'
import { ApplicationViews } from "./ApplicationViews";
//import { useOnClickOutside } from './CloseMenu'
import './Home.css'


// useOnClickOutside(node, ()=> setOpen(false))

export const Home = () =>{
  const [ open, setOpen] = useState(false)
  const node = useRef()
  
  return  <div className="container" >
    
    <span open={open} onClick={()=> setOpen(!open) }
         className="menu__button--container">
      <div className='menu__button'></div>
      <div className='menu__button'></div>
      <div className='menu__button'></div>
    </span>
    
    <div className='container__views'ref={node}>
      <Navbar open={open} setOpen={setOpen} />
    </div>
      <ApplicationViews open={open} setOpen={setOpen}/>
    </div>
  
  
 }

  
