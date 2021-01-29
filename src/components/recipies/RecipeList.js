import React, {useContext, useEffect} from 'react'
import { RecipeContext } from './RecipeProvider'
import { RecipeCard } from './RecipeCard'

export const RecipeList = () => {
  const { recipes, getRecipes } = useContext(RecipeContext)
  
  //initial render for mounting
  useEffect(()=>{
    getRecipes()
  },[])// eslint-disable-line react-hooks/exhaustive-deps
  
  //returning single object
  return  (
    <>
   { console.log("RecipeList", recipes)}
    <div className="recipeList__container">
      {recipes.map(r => {
        return <RecipeCard key={r.id} recipe={r} />
      })}
    </div>
    </>
  )
}
