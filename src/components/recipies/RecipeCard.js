import React from 'react'
import { Link } from 'react-router-dom'

export const RecipeCard = ({ recipe }) => {
  
  return (
    <div className="recipeCard">
    <Link to={`/recipes/detail/${recipe.id}`}>
       <h1 className="recipeCard__name">{recipe.name}</h1>
    </Link>  
    </div>
  )
}