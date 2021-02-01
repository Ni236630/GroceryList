import React from "react";
import { Route } from "react-router-dom";
import { RecipeProvider } from "./recipies/RecipeProvider";
import { RecipeList } from "./recipies/RecipeList";
import { RecipeDetail } from "./recipies/RecipeDetail";
import { RecipeForm } from "./recipies/RecipeForm";
import { IngredientProvider } from "./ingredients/IngredientProvider";

export const ApplicationViews = () => {
  return (
    <>
      <RecipeProvider>
        <Route exact path="/recipes/add">
          <RecipeForm />
        </Route>
        <IngredientProvider>
          <Route exact path="/recipes/detail/:recipeId(\d+)">
            <RecipeDetail />
          </Route>
        </IngredientProvider>
        <Route exact path="/recipes">
          <RecipeList />
        </Route>
      </RecipeProvider>
    </>
  );
};
