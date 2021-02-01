import React, { useState }  from "react";
import { Navbar } from './nav/Navbar'
import { ApplicationViews } from "./ApplicationViews";
import './Home.css'



export const Home = () =>{
  
   const [ open, setOpen] = useState(false)
  
  return  <div>
    <div open={open} onClick={()=> setOpen(!open)} className="menu__button--container">
      <div className='menu__button'></div>
      <div className='menu__button'></div>
      <div className='menu__button'></div>
    </div>
      <Navbar key={1} open={open} setOpen={setOpen} />
      <ApplicationViews open={open} setOpen={setOpen}/>
    </div>
  
  
 }

  
