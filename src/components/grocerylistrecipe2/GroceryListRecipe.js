import React, { createContext, useState } from 'react'

export const GroceryListRecipeContext = createContext()

export const GroceryListRecipeProvider = (props)=> {
  
  const [jointList, setJointList ] = useState([])
  
  const getGroceryRecipeJoin = () => {
    return fetch('http://localhost:8088/groceryListSelect')
      .then(res => res.json())
      .then(setJointList)
  }
  
  return (
    <GroceryListRecipeContext.Provider value={{
      getGroceryRecipeJoin, jointList
    }}>
      {props.children}
    </GroceryListRecipeContext.Provider>
  )
}
