import React, { useEffect, useState, useContext } from "react";
import { RecipeContext } from "./RecipeProvider";
import { IngredientContext } from "../ingredients/IngredientProvider";
import { useParams, useHistory } from "react-router-dom";
import "./Recipe.css";
import { IngredientCard } from "../ingredients/IngredientCard";


export const RecipeDetail = () => {
  const { ingredients, getIngredients } = useContext(IngredientContext);
  const { getRecipeById } = useContext(RecipeContext);

  const [recipe, setRecipe] = useState({});
  const { recipeId } = useParams();


  const history = useHistory();

  useEffect(() => {
    getIngredients();
    getRecipeById(recipeId).then((res) => {
      setRecipe(res);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //TODO: add way to display sort ingredients by alphabetical order
  return (
    <section className="recipe">
       <button onClick={()=> history.push("/recipes")}>back</button>
      <h3 className="recipe__name">{recipe.name}</h3>
      <h4>Ingredients</h4>
      {ingredients.map((i) => {
         if (i.recipesId === recipe.id) {
          return <IngredientCard key={i.id} ingredient={i} />;
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
