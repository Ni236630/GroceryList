import React, { useEffect, useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { GroceryListContext } from "./GroceryProvider";
import { IngredientContext } from "../ingredients/IngredientProvider";
import { GroceryListRecipeContext } from "../grocerylistrecipe2/GroceryListRecipe";
import { RecipeContext } from "../recipies/RecipeProvider";
import "../recipies/Recipe.css";


export const GroceryDetail = () => {
  //getting all the information required for this
  const { getRecipes } = useContext(RecipeContext);
  const { ingredients, getIngredients } = useContext(IngredientContext);
  const { getGroceryListById } = useContext(GroceryListContext);
  const { jointList, getGroceryRecipeJoin } = useContext(
    GroceryListRecipeContext
  );
 
  const [list, setList] = useState({});
  const { listId } = useParams();
  const history = useHistory();
  
  //variable containers for steps in data extraction
  const duplicateIdCounter = {}
  const html = []


  useEffect(() => {
    getGroceryRecipeJoin();
    getRecipes();
    getIngredients();
    getGroceryListById(listId).then((res) => {
      setList(res);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  
  /* method for extracting and return data for component */
  
//gets all ingredients in one array
 const matchingGroceryList = jointList.filter(l=>l.groceryListId === parseInt(listId)).map((value) =>{
   
   let ingredientList = ingredients.filter((i) => i.recipesId === value.recipesId)
  return ingredientList
})

//flattens and sorts the list of all ingredient objects
const matchingIngredients = matchingGroceryList.flat().sort((a, b) => a.name.localeCompare(b.name))

//makes new object of key value pairs based off of the name (key) and how many duplicates (value)
for (let object of matchingIngredients) {
  duplicateIdCounter[object['name']] = (duplicateIdCounter[object['name']] || 0) + 1
}
//iterates new object and pushes them into an array as key/value pairs  within an <li> element 
for (const [key,value] of Object.entries(duplicateIdCounter)){
  html.push(<li key={key}> {`${value} `+`x`+` ${key}`}</li>);
}
  

  return (
    <>
      <div className="groceryList recipe">
        <button onClick={() => history.push("/grocerylists")}>back</button>
        <h3 className="grocerylist__name">{list.name}</h3>
        <div>
          { html }
        </div>
      </div>
    </>
  );
};
