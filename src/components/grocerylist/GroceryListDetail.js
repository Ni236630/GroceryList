import React, {useEffect, useState, useContext }from 'react'
import { GroceryListContext } from './GroceryProvider'
import { IngredientContext } from '../ingredients/IngredientProvider'
import { RecipeContext  } from '../recipies/RecipeProvider'
import { useHistory, useParams } from 'react-router-dom'

export const GroceryDetail = () => {
  const { recipes, getRecipeById }= useContext(RecipeContext)
  const { ingredients, getIngredients } = useContext(IngredientContext)
  const { groceryList, getGroceryListById } = useContext(GroceryListContext)
  
  const [list, setList] = useState({})
  const { listId } = useParams()
  const history = useHistory()
  
  useEffect(()=>{
    getIngredients()
    getGroceryListById(listId)
      .then(res=> {
        setList(res)
      })
  },[])// eslint-disable-line react-hooks/exhaustive-deps
  
  return(
    <section className="groceryList">
       <button onClick={()=> history.push("/grocerylists")}>back</button>
      <h3 className="grocerylist__name">{groceryList.name}</h3>
      
      {ingredients.map((i) => {
         if (i.recipesId === recipe.id) {
          return <IngredientCard key={i.id} ingredient={i} />;
        }
       return  <IngredientCard key={i.id} ingredient={i}/>
      })}
      <div className="recipe__instructions">
        <h4>Instructions</h4>
        {recipe.instruction}
      </div>
      <div className="recipe__specialNotes">
        <h4>Special Notes</h4>
        **{recipe.specialNotes}
      </div>
    </section>
  )
}