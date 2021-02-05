import React, { createContext, useState } from 'react'


export const GrocerySelectContext = createContext()

export const GrocerySelectProvider = (props) => {
  const [ grocerySelect, setGrocerySelect ] = useState([])
  
  const getGrocerySelect = () => {
    return fetch('http://localhost:8088/groceryLists')
      .then(res=>res.json())
      .then(setGrocerySelect)
  }
  
  const addGrocerySelect = (grocerylistObj) => {
    return fetch('http://localhost:8088/groceryLists',{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(grocerylistObj)
    })
      .then(getGrocerySelect)
  }
  
  return(
   <GrocerySelectContext.Provider value={{
     getGrocerySelect, grocerySelect, addGrocerySelect
   }}>
     {props.children}
   </GrocerySelectContext.Provider>
  )
}