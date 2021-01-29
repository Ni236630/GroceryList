import React, { createContext, useState } from 'react'

export const RecipeContext = createContext()

export const RecipeProvider = (props) => {
  const [ recipes, setRecipes ] = useState([]
    )
  const getRecipes = () => {
    return fetch("http://localhost:8088/recipes")
      .then(res => res.json())
      .then(setRecipes)
  }
  
  return (
    <RecipeContext.Provider value={{
       recipes, getRecipes
    }}>
      {props.children}
    </RecipeContext.Provider>
  )
}