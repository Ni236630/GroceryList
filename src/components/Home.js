import React, { useState, useRef }  from "react";
import { Navbar } from './nav/Navbar'
import { ApplicationViews } from "./ApplicationViews";
import { useOnClickOutside } from './CloseMenu'
import './Home.css'



export const Home = () =>{
  const node = useRef()
  useOnClickOutside(node, ()=> setOpen(false))
   const [ open, setOpen] = useState(false)
  
  return  <div ref={node}>
    <div open={open} onClick={()=> setOpen(!open)} className="menu__button--container">
      <div className='menu__button'></div>
      <div className='menu__button'></div>
      <div className='menu__button'></div>
    </div>
      <Navbar open={open} setOpen={setOpen} />
      <ApplicationViews open={open} setOpen={setOpen}/>
    </div>
  
  
 }

  
