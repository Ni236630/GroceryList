import React,{ createContext, useState } from 'react'


export const IngredientContext = createContext()

export const IngredientProvider = (props) =>{
  
  const [ingredients, setIngredients] = useState([])
  
  const getIngredients = () => {
    return fetch('http://localhost:8088/ingredients')
      .then(res =>  res.json())
      .then(setIngredients) 
  }
  
  const deleteIngredient = (ingredientId) =>{
    return fetch(`http://localhost:8088/${ingredientId}`,{
      method:'DELETE'
    })
      .then(getIngredients)
  }
  
  const addIngredient = (ingredientObj) => {
    return fetch ('http://localhost:8088/ingredients',{
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(ingredientObj)
    })
      .then(getIngredients) 
  }
  return (
    <IngredientContext.Provider value={{
      ingredients, getIngredients, addIngredient, deleteIngredient
    }}>
      {props.children}
    </IngredientContext.Provider>
    
  )
  
}