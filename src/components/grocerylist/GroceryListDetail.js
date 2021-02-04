import React, { useEffect, useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { GroceryListContext } from "./GroceryProvider";
import { IngredientContext } from "../ingredients/IngredientProvider";
import { GroceryListRecipeContext } from "../grocerylistrecipe/GroceryListRecipe";
import { RecipeContext } from "../recipies/RecipeProvider";
import "../recipies/Recipe.css";
import { IngredientCard } from "../ingredients/IngredientCard";

export const GroceryDetail = () => {
  //getting all the information required for this
  const {  getRecipes } = useContext(RecipeContext);
  const { ingredients, getIngredients } = useContext(IngredientContext);
  const { getGroceryListById } = useContext(GroceryListContext);
  const { jointList, getGroceryRecipeJoin } = useContext(
    GroceryListRecipeContext
  );

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



  return (
    <>
      <div className="groceryList recipe">
        <button onClick={() => history.push("/grocerylists")}>back</button>
        <h3 className="grocerylist__name">{list.name}</h3>
        <div>
          {
            //maybe use concat before sort, but where?
          
            jointList.map((l) => {
              if (l.grocerylistsId === parseInt(listId)){
                let hello = ingredients
                  .filter((i) => i.recipesId === l.recipesId )
                  .sort((a, b) => a.name.localeCompare(b.name))
              
                 return hello.map((i) => <IngredientCard key={i.id} ingredient={i} />);
             
              }
            })
          }
        </div>
      </div>
    </>
  );
};