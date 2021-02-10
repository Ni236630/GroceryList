import React, { useEffect, useState, useContext } from "react";
import { RecipeContext } from "./RecipeProvider";
import { IngredientContext } from "../ingredients/IngredientProvider";
import { useParams, useHistory } from "react-router-dom";
import "./Recipe.css";
import { IngredientCard } from "../ingredients/IngredientCard";
import BackButton from '../icons/Back'

export const RecipeDetail = () => {
  
  //obtaining context from the providers
  const { deleteIngredient, ingredients, getIngredients } = useContext(
    IngredientContext
  );
  const { deleteRecipe, getRecipeById } = useContext(RecipeContext);
  

  const [recipe, setRecipe] = useState({});
  const { recipeId } = useParams();
  const { ingredientId } = useParams();
  const history = useHistory();

  //function for button two step process to get rid of ingredients not needed. 
  const handleDelete = () => {
    return deleteRecipe(recipeId)
      .then((recipes) => {
        ingredients.map((i) => {
          if (i.recipesId === recipes.id) {
            return deleteIngredient(ingredientId);
          }
        });
      })
      .then(() => history.push("/recipes"));
  };

  useEffect(() => {
    getIngredients();
    getRecipeById(recipeId).then((res) => {
      setRecipe(res);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  


  return (
    <section className="recipe">
      <div className="button__container" onClick={() => history.push("/")}><BackButton className ="button--Back" /></div>
      <button
        onClick={() => {
          handleDelete();
        }}
      >
        Delete
      </button>
      <h3 className="recipe__name">{recipe.name}</h3>
      <h4>Ingredients:</h4>
      {
        ingredients.filter((i) => i.recipesId === recipe.id).sort((a, b) => a.name.localeCompare(b.name)).map((ing)=> <IngredientCard key={ing.id} ingredient={ing} />)
      }
      <div className="recipe__instructions">
        <h4>Instructions:</h4>
        {recipe.instruction}
      </div>
      <div className="recipe__specialNotes">
        <h4>Special Notes:</h4>
        **{recipe.specialNotes}
      </div>
    </section>
  );
};
