import React, { useEffect, useState, useContext } from "react";
import { RecipeContext } from "./RecipeProvider";
import { IngredientContext } from "../ingredients/IngredientProvider";
import { useParams, useHistory } from "react-router-dom";
import "./Recipe.css";
import { IngredientCard } from "../ingredients/IngredientCard";

export const RecipeDetail = () => {
  const { deleteIngredient, ingredients, getIngredients } = useContext(
    IngredientContext
  );
  const { deleteRecipe, getRecipeById } = useContext(RecipeContext);

  const [recipe, setRecipe] = useState({});
  const { recipeId } = useParams();
  const { ingredientId } = useParams();

  const history = useHistory();

  
  const handleDelete = () => {
    return deleteRecipe(recipeId)
      .then(() => {
        ingredients.map((i) => {
          if (i.recipesId === recipe.id) {
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
console.log("hello from details",recipe.id)
  //TODO: add way to display sort ingredients by alphabetical order
  return (
    <section className="recipe">
      <button onClick={() => history.push("/recipes")}>back</button>
      <button
        onClick={() => {
          handleDelete();
        }}
      >
        Delete
      </button>
      <h3 className="recipe__name">{recipe.name}</h3>
      <h4>Ingredients</h4>
      {ingredients.map((i) => {
        if (i.recipesId === recipe.id) {
          return  <IngredientCard key={i.id} ingredient={i} />
        }else{
          return
        }
      
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
  );
};
