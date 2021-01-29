import React from "react"
import { Route } from "react-router-dom"
import { RecipeProvider } from "./recipies/RecipeProvider"
import { RecipeList } from './recipies/RecipeList'


export const ApplicationViews = () => {
    return (
        <>
          <RecipeProvider>
            <Route exact path="/recipes">
               <RecipeList />
            </Route>
          </RecipeProvider>
        </>
    )
}