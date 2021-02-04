import React, {useContext, useEffect, useState} from 'react'
import {IngredientContext} from '../ingredients/IngredientProvider'
import {RecipeContext} from './RecipeProvider'
import { useHistory } from 'react-router-dom'
import "./Recipe.css"

export const RecipeForm = () => {
  
  //pulling addRecipe function from provider
  const { addRecipe,getRecipes } = useContext(RecipeContext)
  
  const { addIngredient, getIngredients } = useContext(IngredientContext)
  
  const history = useHistory()
  
  //set up for the default object which will be saved to the json file
  const [recipe, setRecipe] = useState({
    name:"",
    userId:0,
    instruction:"",
    specialNotes:""
  })
  
  const [ingredient, setIngredients] = useState({
    name: "",
    recipeId: 0
  })
  
  
  useEffect(()=>{
    getRecipes()
      .then(getIngredients)
  },[])// eslint-disable-line react-hooks/exhaustive-deps
  
  //controlled component allowing us to update on field changes
  const handleControlledInputChange = (event) => {
    const newRecipe = {...recipe}
    newRecipe[event.target.id] = event.target.value
    setRecipe(newRecipe)
  }
  // allow use to update on field change for the ingregient
  const handleControlledInputChangeIngredient = (event) => {
    const newIngredient = {...ingredient}
    newIngredient[event.target.id] = event.target.value
    setIngredients(newIngredient)
  }
  //TODO need to add ingredient save access and local storage for user!
  const handleSaveRecipe = () => {
    addRecipe({
      name:recipe.name,
      userId:1,
      instruction:recipe.instruction,
      specialNotes:recipe.specialNotes
    })
      .then((newRecipe)=>{
        console.log(newRecipe)
             addIngredient({
                  name:ingredient.name,
                  recipesId:newRecipe.id
                })
              
          
      })
      .then(history.push("/recipes"))
  }
  
  //TODO: add ability to generate more ingredients
  return (
    <div className="recipe__form recipe">
      <button onClick={()=> history.push("/recipes")}>back</button>
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
              <label htmlFor="instructions">ingredient: </label>
              <input type="text" id="name" onChange={handleControlledInputChangeIngredient}required className="from-control" placeholder="Ingredient Name" value={ingredient.name}/>
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label htmlFor="instructions">Instructions: </label>
              <textarea type="text" id="instruction" cols="45" rows="10" onChange={handleControlledInputChange}required className="from-control" placeholder="Recipe Instructions" value={recipe.instruction}/>
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label htmlFor="specialNotes">Special Notes: </label>
              <textarea type="text" id="specialNotes" cols="45"rows="5" onChange={handleControlledInputChange}required className="from-control" placeholder="Recipe Notes" value={recipe.specialNotes}/>
            </div>
          </fieldset>
            <button className="btn btn-primary"
          
            onClick={event => {
              event.preventDefault() // Prevent browser from submitting the form and refreshing the page
              handleSaveRecipe()
            }}>
          Save Recipe</button>
           
        </form>
    </div>
  )
}


