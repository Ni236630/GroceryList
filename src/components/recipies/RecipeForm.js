import React, { useContext, useEffect, useState, Fragment } from "react";
import { IngredientContext } from "../ingredients/IngredientProvider";
import { RecipeContext } from "./RecipeProvider";
import { useHistory } from "react-router-dom";
import "./Recipe.css";
import AddButton from "../icons/Add";
import SubtractButton from "../icons/Subtract";
import BackButton from "../icons/Back";
import SaveButton from '../icons/Save'

export const RecipeForm = () => {
 
  //pulling addRecipe function from provider
  const { addRecipe, getRecipes } = useContext(RecipeContext);

  const { addIngredient, getIngredients } = useContext(IngredientContext);

  const history = useHistory();
  const activeUser = parseInt(localStorage.getItem("grocery_customer"))
  //set up for the default object which will be saved to the json file; all foreign keys must match primaries
  const [recipe, setRecipe] = useState({
    name: "",
    userId: 0,
    instruction: "",
    specialNotes: "",
  });

  const [ingredients, setIngredients] = useState([
    {
      name: "",
    },
  ]);

  useEffect(() => {
    getRecipes().then(getIngredients);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //controlled component allowing us to update on field changes
  const handleControlledInputChange = (event) => {
    const newRecipe = { ...recipe };
    newRecipe[event.target.id] = event.target.value;
    setRecipe(newRecipe);
  };
  // allow use to update on field change for the ingregient
  const handleControlledInputChangeIngredient = (index, event) => {
    
    const newIngredient =  [...ingredients] ;
    if (event.target.name === "ingredient") {
      newIngredient[index].name = event.target.value;
    }
    setIngredients(newIngredient);
  };

  const addIngredientField = () => {
    const values = [...ingredients];
    values.push({ name: "" });
    setIngredients(values);
  };

  const removeIngredientField = (index) => {
    const values = [...ingredients];
    if (values[index] === values[0]) {
      return;
    } else {
      values.splice(index, 1);
    }
    return setIngredients(values);
  };

 //Two-step process to save a recipe and its ingredients
  const handleSaveRecipe = () => {
    addRecipe({
      name: recipe.name,
      usersId: activeUser,
      instruction: recipe.instruction,
      specialNotes: recipe.specialNotes,
    })
      .then((newRecipe) => {
        ingredients.forEach((ingredient)=>{
          addIngredient({
            name: ingredient.name,
            recipesId: newRecipe.id,
          });
        })
      })
      .then(history.push("/recipes"));
  };
 
  return (
    <div className="recipe__form recipe">
      <div className="button__container" onClick={() => history.push("/recipes")}><BackButton className ="button--Back" /></div>
      
        <h2 className="recipeForm__title">New Recipe</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Recipe Name </label>
            <input
               autoComplete="off"
              type="text"
              id="name"
              onChange={handleControlledInputChange}
              required
              autoFocus
              className="from-control"
              placeholder="Recipe Name"
              value={recipe.name}
            />
          </div>
        </fieldset>
        <fieldset>
         {ingredients.map((ingredient, index) => (
            <Fragment key={`${ingredient}~${index}`}>
              <div className="form-group ">
                <label htmlFor="ingredient">Ingredient</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="ingredient"
                  value={ingredient.name}
                  onChange={(event) =>
                    handleControlledInputChangeIngredient(index, event)
                  }
                />
              </div>
              <div className="form-group add-subtract">
                <div
                  className="button__container" 
                  onClick={() => removeIngredientField(index)}
                >
                 <SubtractButton className="addButton"/>
                </div>
                <div className="button__container" onClick={() => addIngredientField()}
                > <AddButton className="addButton"/></div>
                
              </div>
            </Fragment>
          ))}
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="instructions">Instructions </label>
            <textarea
              type="text"
              id="instruction"
              rows="10"
              wrap="hard"
              onChange={handleControlledInputChange}
              required
              className="from-control"
              placeholder="Recipe Instructions"
              value={recipe.instruction}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="specialNotes">Special Notes </label>
            <textarea
              type="text"
              id="specialNotes"
              cols="45"
              rows="5"
              onChange={handleControlledInputChange}
              required
              className="from-control"
              placeholder="Recipe Notes"
              value={recipe.specialNotes}
            />
          </div>
        </fieldset>
       
        <div className="saveRecipe" onClick={(event) => {
         event.preventDefault();
         handleSaveRecipe()
         
        }}> Save Recipe
          <SaveButton className="button--save" />
        </div>
        </div>
  );
};
