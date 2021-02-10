import React, {useContext, useEffect} from 'react'
import { RecipeContext } from './RecipeProvider'
import { RecipeCard } from './RecipeCard'
import { useHistory } from 'react-router-dom'
import BackButton from '../icons/Back'
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
    <div className="recipeList__container recipe">
    <div className="button__container" onClick={() => history.push("/")}><BackButton className ="button--Back" /></div>
      {/*adds button to direct to form to add new recipe
        replace with filter (look at how map works vs filter)*/}
      <button onClick={()=> history.push("/recipes/add")}>Add New Recipe </button>
      {recipes.filter(r =>r.usersId === parseInt(localStorage.getItem("grocery_customer")) ).map(i => <RecipeCard key={i.id} recipe={i} /> )}
    </div>
    </>
  )
}
