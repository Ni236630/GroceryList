import React, { createContext, useState } from 'react'

export const GroceryListContext = createContext()

export const GroceryListProvider = (props) => {
 
  const [grocerylists, setGrocerylist] = useState([])
  
  const getGroceryListById = (id) => {
    return fetch(`http://localhost:8088/grocerylists/${id}`)
      .then(res => res.json())
  }
  
  const getGroceryLists = () => {
    return fetch('http://localhost:8088/grocerylists')
      .then(res => res.json())
      .then(setGrocerylist)
  }
  const addGroceryList = (listObj) =>{
    return fetch('http://localhost:8088/grocerylists',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(listObj)
    })
      .then(res => res.json())
      .then(list => {
        getGroceryLists()
        return list
      })
  }
  
  const deleteGroceryList = (id)=>{
    return fetch(`http://localhost:8088/grocerylists/${id}`,{
      method:'DELETE'
    })
      .then(getGroceryLists)
  }
  
  return (
    <GroceryListContext.Provider value={{
      grocerylists, getGroceryLists, addGroceryList, getGroceryListById, deleteGroceryList 
    }}>
      {props.children}
    </GroceryListContext.Provider>
    
  )
}