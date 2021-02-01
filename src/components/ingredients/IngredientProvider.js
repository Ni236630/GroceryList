import React,{ createContext, useState } from 'react-router-dom'


export const IngredientContext = createContext()

export const IngredientProvider = (props) =>{
  
  const [ingredients, setIngredients] = useState([])
  
  const getIngredients = () => {
    return fetch('http://localhost:8088/ingredients')
      .then(res =>  res.json())
      .then(setIngredients) 
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
      ingredients, getIngredients, addIngredient
    }}>
      {props.children}
    </IngredientContext.Provider>
    
  )
  
}