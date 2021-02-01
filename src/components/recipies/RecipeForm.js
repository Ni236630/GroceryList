import React, {useContext, useEffect, useState} from 'react'
import {RecipeContext} from './RecipeProvider'
import { useHistory } from 'react-router-dom'
import "./Recipe.css"

export const RecipeForm = () => {
  
  //pulling addRecipe function from provider
  const { addRecipe,getRecipes } = useContext(RecipeContext)
  
  const history = useHistory()
  
  //set up for the default object which will be saved to the json file
  const [recipe, setRecipe] = useState({
    name:"",
    userId:0,
    instruction:"",
    specialNotes:""
  })
  
  
  useEffect(()=>{
    getRecipes()
  },[])// eslint-disable-line react-hooks/exhaustive-deps
  
  //controlled component allowing us to update on field changes
  const handleControlledInputChange = (event) => {
    const newRecipe = {...recipe}
    newRecipe[event.target.id] = event.target.value
    setRecipe(newRecipe)
  }
  //TODO need to add ingredient save access and local storage for user!
  const handleSaveRecipe = () => {
    
    addRecipe({
      name:recipe.name,
    userId:0,
    instruction:recipe.instruction,
    specialNotes:recipe.specialNotes
    })
      .then(history.push("/recipes"))
  }
  
  
  return (
    <form className="recipeForm">
        <h2 className="recipeForm__title">New Recipe</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Recipe Name: </label>
            <input type="text" id="name" onChange={handleControlledInputChange}required autoFocus className="from-control" placeholder="Recipe Name" value={recipe.name}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="instructions">Instructions: </label>
            <textarea type="text" id="instruction" onChange={handleControlledInputChange}required className="from-control" placeholder="Recipe Instructions" value={recipe.instruction}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="specialNotes">Special Notes: </label>
            <textarea type="text" id="specialNotes" onChange={handleControlledInputChange}required className="from-control" placeholder="Recipe Notes" value={recipe.specialNotes}/>
          </div>
        </fieldset>
        {/*
        <fieldset> 
              <div className="form-group">
                  <label htmlFor="ingredient">Ingredient: </label>
                  <select value={ingredient.id} name="ingredientId" id="ingredientId" className="form-control"onChange={handleControlledInputChange} >
                      <option value="0">Select an ingredient</option>
                      {ingredients.map(i => (
                          <option key={i.id} value={i.id}>
                              {i.name}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset>
          */}
          <button className="btn btn-primary"
        
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveRecipe()
          }}>
        Save Recipe</button>
         
      </form>
  )
}


