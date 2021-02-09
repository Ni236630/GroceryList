import React from 'react'


export const IngredientCard = ({ ingredient }) => {

  return (
    <div className="ingredientCard">
  
       <div className="ingredientCard__name">{ingredient.name}</div>
  
    </div>
  )
}

export const IngredientCardDetail = ({ ingredient }) => { 
return  ( 
<>

<div className="ingredientCard">
  
  <div className="ingredientCard__name">{ingredient.name}</div>

</div>
</>)
}
