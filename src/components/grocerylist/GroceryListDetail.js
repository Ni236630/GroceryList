import React, { useEffect, useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { GroceryListContext } from "./GroceryProvider";
import { IngredientContext } from "../ingredients/IngredientProvider";
import { GroceryListRecipeContext } from "../grocerylistrecipe2/GroceryListRecipe";
import { RecipeContext } from "../recipies/RecipeProvider";
import "../recipies/Recipe.css";
import { IngredientCard, IngredientCardDetail } from "../ingredients/IngredientCard";

export const GroceryDetail = () => {
  //getting all the information required for this
  const { getRecipes } = useContext(RecipeContext);
  const { ingredients, getIngredients } = useContext(IngredientContext);
  const { getGroceryListById } = useContext(GroceryListContext);
  const { jointList, getGroceryRecipeJoin } = useContext(
    GroceryListRecipeContext
  );
  const [listObj, setListObj] = useState({})
  const [list, setList] = useState({});
  const { listId } = useParams();
  const history = useHistory();

  useEffect(() => {
    getGroceryRecipeJoin();
    getRecipes();
    getIngredients();
    getGroceryListById(listId).then((res) => {
      setList(res);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  
//gets all ingredients in one array
 const allIngredients = jointList.filter(l=>l.groceryListId === parseInt(listId)).map((value) =>{
  let ingredientList = ingredients.filter((i) => i.recipesId === value.recipesId)
 return ingredientList
}).flat().sort((a, b) => a.name.localeCompare(b.name)).map(i=>i.name)

 const result  = {}
const ingredientReduced  = allIngredients.map(function(x){
 
result[x]=(result[x]||0)+1
})



// const duplicateIdCounter = {}
// ​
// for (let object of objectArray) {
//   duplicateIdCounter[object['id']] = (duplicateIdCounter[object['id']] || 0) + 1
// }
// ​
// const uniqueObjectArray = objectArray.filter((obj) => duplicateIdCounter[obj['id']] < 2)
// ​
// console.log(uniqueObjectArray)

// for (const key in result) {
//   <div>
//     <li> `${key}: ${result[key]}`</li>;
//   </div>
// }

 const newList = [...new Set(allIngredients)]
 
 
 const bullshit = Object.keys(result)
 bullshit.forEach((key,index)=>{
 console.log( <li>{`${key}: ${result[key]}`} </li> )
})   

  return (
    <>
      <div className="groceryList recipe">
        <button onClick={() => history.push("/grocerylists")}>back</button>
        <h3 className="grocerylist__name">{list.name}</h3>
        <div>
          {
           
      
          
            //maybe use concat before sort, but where?
            newList.map(e => {
           return <li key={e}>{e}</li> })
            // jointList.map((l) => {
            //   if (l.groceryListId === parseInt(listId)) {
            //     let hello = ingredients.filter(
            //       (i) => i.recipesId === l.recipesId
            //     );
            //     console.log("hello", hello);
            //     return hello
            //       .sort((a, b) => a.name.localeCompare(b.name))
            //       .map((i) => <IngredientCard key={i.id} ingredient={i} />);
            //   }
            // })
          }
        </div>
      </div>
    </>
  );
};
