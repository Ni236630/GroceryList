import React, { createContext, useState } from 'react'

export const RecipeContext = createContext()

export const RecipeProvider = (props) => {
  const [ recipes, setRecipes ] = useState([]
    )
  
  const getRecipeById = (id) => {
    return fetch(`http://localhost:8088/recipes/${id}`)
      .then(res => res.json())
  }
    
  const getRecipes = () => {
    return fetch("http://localhost:8088/recipes")
      .then(res => res.json())
      .then(setRecipes)
  }
  
  return (
    <RecipeContext.Provider value={{
       recipes, getRecipes, getRecipeById
    }}>
      {props.children}
    </RecipeContext.Provider>
  )
}