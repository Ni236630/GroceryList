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
    specialNotes:"",
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
  //TODO need to add ingredient save access
  const handleSaveRecipe = () => {
    
    addRecipe()
      .then(history.push("./recipes"))
  }
  
  
  return (
    <form className="recipeForm">
        <h2 className="recipeForm__title">New Recipe</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Recipe name:</label>
            <input type="text" id="name" onChange={handleControlledInputChange}required autoFocus className="from-control" placeholder="Recipe name" value={recipe.name}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="instructions">instructions:</label>
            <input type="textarea" id="instructions" onChange={handleControlledInputChange}required className="from-control" placeholder="Recipe instructions" value={recipe.instruction}/>
          </div>
        </fieldset>
        {/*
        <fieldset> 
              <div className="form-group">
                  <label htmlFor="location">Assign to location: </label>
                  <select value={animal.locationId} name="locationId" id="locationId" className="form-control"onChange={handleControlledInputChange} >
                      <option value="0">Select a location</option>
                      {locations.map(l => (
                          <option key={l.id} value={l.id}>
                              {l.name}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="customerId">Customer: </label>
                  <select value={animal.customerId} name="customer" id="customerId" className="form-control" onChange={handleControlledInputChange}>
                      <option value="0">Select a customer</option>
                      {customers.map(c => (
                          <option key={c.id} value={c.id}>
                              {c.name}
                          </option>
                      ))}
                  </select>
              </div>
                      </fieldset>*/}
          <button className="btn btn-primary"
        
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveRecipe()
          }}>
        Save Recipe</button>
         
      </form>
  )
}


