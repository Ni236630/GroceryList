import React, { useEffect, useState, useContext } from 'react'
import { RecipeContext } from './RecipeProvider'
import { useParams, useHistory } from 'react-router-dom'
import './Recipe.css'


export const RecipeDetail = () => {
  
  const { getRecipeById } = useContext(RecipeContext)
  
  const [ recipe, setRecipe] = useState({})
  const { recipeId } = useParams()
  const history = useHistory()
  
  useEffect(()=>{
    getRecipeById(recipeId)
      .then( res => {
        setRecipe(res)
      })
  },[])// eslint-disable-line react-hooks/exhaustive-deps
  
  //TODO: add way to display ingredients from other provider
  return(
    <section className="recipe">
      <h3 className="recipe__name">{recipe.name}</h3>
      <div className="recipe__instructions">
        {recipe.instruction}
      </div>
    </section>
  )
  
  
}
