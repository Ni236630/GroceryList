import React, { useContext, useEffect } from "react";
import { RecipeContext } from "./RecipeProvider";
import { RecipeCard } from "./RecipeCard";
import { useHistory } from "react-router-dom";
import BackButton from "../icons/Back";
import AddSave from "../icons/AddSave";
import "./Recipe.css";

export const RecipeList = () => {
  //receiving usable functions and state variable from provider

  const { recipes, getRecipes } = useContext(RecipeContext);
  const history = useHistory();
  //initial render for mounting
  useEffect(() => {
    getRecipes();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const userRecipes = recipes
  .filter(
    (r) =>
      r.usersId === parseInt(localStorage.getItem("grocery_customer"))
  )
  
  //returning single object
  return (
    <>
      <div className="recipeList__container recipe">
        <div className="button__container--list"  >
          <div onClick={() => history.push("/")}>
            <BackButton className="button--Back" />
          </div>
          
          <div
            className="button__container"
            onClick={() => history.push("/recipes/add")}
          >
            <AddSave className="newRecipe--button" />
          </div>
        </div>
        {/*adds button to direct to form to add new recipe
        replace with filter (look at how map works vs filter)*/}

        {userRecipes.length !== 0 ? (userRecipes
          .map((i) => (
            <RecipeCard key={i.id} recipe={i} />
          ))):(
            <div>
              {" "}
              <h3>Add some recipes to get started! </h3>
            </div>
          ) }
      </div>
    </>
  );
};
