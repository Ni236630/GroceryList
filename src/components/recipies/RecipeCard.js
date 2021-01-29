import React from 'react'

export const RecipeCard = ({ recipe }) => {
  
  return (
    <div className="recipeCard">
      <h1>{recipe.name}</h1>
    </div>
  )
}