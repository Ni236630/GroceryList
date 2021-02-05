import React, { createContext, useState } from 'react'


export const GrocerySelectContext = createContext()

export const GrocerySelectProvider = (props) => {
  const [ grocerySelect, setGrocerySelect ] = useState([])
  
  const getGrocerySelect = () => {
    return fetch('http://localhost:8088/')
      .then(res=>res.json())
      .then(setGrocerySelect)
  }
  
  return(
   <GrocerySelectContext.Provider value={{
     getGrocerySelect, grocerySelect
   }}>
     {props.children}
   </GrocerySelectContext.Provider>
  )
}