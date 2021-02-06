import React from "react";
import { Route } from "react-router-dom";
import { RecipeProvider } from "./recipies/RecipeProvider";
import { RecipeList } from "./recipies/RecipeList";
import { RecipeDetail } from "./recipies/RecipeDetail";
import { RecipeForm } from "./recipies/RecipeForm";
import { IngredientProvider } from "./ingredients/IngredientProvider";
import { GroceryListProvider } from "./grocerylist/GroceryProvider";
import { GroceryList } from "./grocerylist/GroceryList";
import { GroceryDetail } from "./grocerylist/GroceryListDetail";
import { GroceryListRecipeProvider } from "./grocerylistrecipe2/GroceryListRecipe";
import { GrocerySelectList } from "./groceryselect/GrocerySelect";
import { GrocerySelectProvider } from "./groceryselect/GrocerySelectProvider";

export const ApplicationViews = () => {
  return (
    <>
      <GroceryListProvider>
        <Route exact path="/grocerylists">
          <GroceryList />
        </Route>
      </GroceryListProvider>
      <RecipeProvider>
        <IngredientProvider>
          <GroceryListProvider>
            <GroceryListRecipeProvider>
              <Route exact path="/grocerylists/detail/:listId(\d+)">
                <GroceryDetail />
              </Route>
            </GroceryListRecipeProvider>
          </GroceryListProvider>
        </IngredientProvider>
      </RecipeProvider>

      <RecipeProvider>
      <GroceryListProvider>
        <GrocerySelectProvider>
          <Route exact path="/">
            <GrocerySelectList />
          </Route>
        </GrocerySelectProvider>
        </GroceryListProvider>
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
