import React, { createContext, useState } from 'react'

//allow use of functions in other components
export const RecipeContext = createContext()

export const RecipeProvider = (props) => {
  //sets initial state as empty array and allows use to fill it with recipes after fetch call
  const [ recipes, setRecipes ] = useState([]
    )
  
    //can get specified recipe from json server
  const getRecipeById = (id) => {
    return fetch(`http://localhost:8088/recipes/${id}`)
      .then(res => res.json())
  }
   //allows use to get all recipes from json server 
  const getRecipes = () => {
    return fetch("http://localhost:8088/recipes")
      .then(res => res.json())
      .then(setRecipes)
  }
  //allows to add recipe when triggered by button on form
  const addRecipe =(recipeObj) => {
    return fetch('http://localhost:8088/recipes',{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(recipeObj)
    })
      .then((newRes)=>newRes.json())
      .then(recipe => {
        getRecipes()
        return recipe
      })
      
  }
  
  return (
    <RecipeContext.Provider value={{
       recipes, getRecipes, getRecipeById,addRecipe
    }}>
      {props.children}
    </RecipeContext.Provider>
  )
}