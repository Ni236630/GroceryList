import React from "react";
import { Route } from "react-router-dom";
import { RecipeProvider } from "./recipies/RecipeProvider";
import { RecipeList } from "./recipies/RecipeList";
import { RecipeDetail } from "./recipies/RecipeDetail";
import { RecipeForm } from "./recipies/RecipeForm";
import { IngredientProvider } from "./ingredients/IngredientProvider";
import { GroceryListProvider } from "./grocerylist/GroceryProvider";
import { GroceryList } from "./grocerylist/GroceryList";

export const ApplicationViews = () => {
  return (
    <>
      <RecipeProvider>
        <GroceryListProvider>
          <Route exact path="/grocerylists">
            <GroceryList />
          </Route>
        </GroceryListProvider>
      </RecipeProvider>
      
      <RecipeProvider>
        <IngredientProvider>
          <Route exact path="/recipes/add">
            <RecipeForm />
          </Route>
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
