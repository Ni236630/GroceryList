import React, { createContext, useState } from 'react'


export const MainSelectContext = createContext()

export const GrocerySelectProvider = (props) => {
  const [ grocerySelect, setGrocerySelect ] = useState([])
  
  const getGrocerySelect = () => {
    return fetch('http://localhost:8088/groceryListSelect')
      .then(res=>res.json())
      .then(setGrocerySelect)
  }
  
  const addGrocerySelect = (grocerylistObj) => {
    return fetch('http://localhost:8088/groceryListSelect',{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(grocerylistObj)
    })
      .then(res => res.json())
      .then(list => {
        getGrocerySelect()
        return list
      })
  }
  
  return(
   <MainSelectContext.Provider value={{
     getGrocerySelect, grocerySelect, addGrocerySelect
   }}>
     {props.children}
   </MainSelectContext.Provider>
  )
}