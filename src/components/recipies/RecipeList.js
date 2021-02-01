import React, {useContext, useEffect} from 'react'
import { RecipeContext } from './RecipeProvider'
import { RecipeCard } from './RecipeCard'
import { useHistory } from 'react-router-dom'
import './Recipe.css'

export const RecipeList = () => {
  //receiving usable functions and state variable from provider

  const { recipes, getRecipes } = useContext(RecipeContext)
  const history = useHistory()
  //initial render for mounting
  useEffect(()=>{
    getRecipes()
  },[])// eslint-disable-line react-hooks/exhaustive-deps
  
  //returning single object
  return  (
    <>
   { console.log("RecipeList", recipes)}
    <div className="recipeList__container recipe">
      {/*adds button to direct to form to add new recipe*/}
      <button onClick={()=> history.push("/recipes/add")}>Add New Recipe </button>
      {recipes.map(r => {
        return <RecipeCard key={r.id} recipe={r} />
      })}
    </div>
    </>
  )
}
