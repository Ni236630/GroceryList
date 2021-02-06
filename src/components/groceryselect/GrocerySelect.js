import React, { useContext, useEffect, useState } from "react";
import { RecipeContext } from "../recipies/RecipeProvider";
import { MainSelectContext } from "./GrocerySelectProvider";
import { GroceryListContext } from "../grocerylist/GroceryProvider";
import "../recipies/Recipe.css";
import "./GrocerySelect.css";

export const GrocerySelectList = () => {
  const activeUser = parseInt(localStorage.getItem("grocery_customer"));
  
  const { recipes, getRecipes } = useContext(RecipeContext);
  const { addGrocerySelect } = useContext(MainSelectContext);

  //grabbing context to use in order to add list name
  const { addGroceryList, getGroceryList } = useContext(GroceryListContext);

  //setting state for the list
  const [grocerySelectList, setGrocerySelectList] = useState({
    name: "",
    usersId: activeUser,
  });

  const [groceryListName, setGroceryListName] = useState([{
    groceryListId: 0,
    recipesId: 0,
  }]);

  useEffect(() => {
    getRecipes().then(getGroceryList);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const addRecipeToList = (event) => {
    const values = [...groceryListName];
    values.push({ name: parseInt(event.target.value) });
    setGroceryListName(values);
    
 
  // const handleControlledInputChangeName = (index,event) => {
     
  //       const newGroceryListItem = groceryListName ;
  //       if(event.target.id === "recipes"){
  //         newGroceryListItem[index].name = event.target.value;
  //       }

  //       setGroceryListName(newGroceryListItem);
  //     }
   };
  
 
  const handleControlledInputChange = (event) => {
      const newGroceryList = { ...grocerySelectList };
      newGroceryList[event.target.id] = event.target.value;
      setGrocerySelectList(newGroceryList);
    };
 
    
 
  const handleSaveList = () => {
    addGroceryList({
      name: grocerySelectList.name,
      usersId: activeUser,
    }).then((list) => {
     //TODO: figure out why this is adding an 8th object
        groceryListName.forEach((recipe)=>{
          console.log(recipe)
           addGrocerySelect({
        groceryListId: list.id,
        recipesId: recipe.name,
      })
        });
    });
  };
  return (
    <div className="recipe">
      <fieldset className="listName">
        <div className="form-group">
          <label htmlFor="name">List Name: </label>
          <input
            type="text"
            id="name"
            required
            autoFocus
            onChange={handleControlledInputChange}
            className="from-control"
            placeholder="List Name"
            value={grocerySelectList.name}
          />
        </div>
      </fieldset>
      <div className="groceryList__container">
        <div className="groceryList--day">
          <h3>Sunday</h3>
          <select name="recipe" onChange={addRecipeToList} id="recipes">
            <option  value="0">Please Select A Recipe</option>
            {recipes.map((r) => {
              if (r.usersId === activeUser) {
                return <option  key={r.id} value={r.id}>{r.name}</option>;
              }
            })}
          </select>
        </div>
        <div className="groceryList--day">
          <h3>Monday</h3>
          <select name="recipe"onChange={addRecipeToList} id="recipes">
            <option value="0">Please Select A Recipe</option>
            {recipes.map((r) => {
              if (r.usersId === activeUser) {
                return <option   key={r.id} value={r.id}>{r.name}</option>;
              }
            })}
          </select>
        </div>
        <div className="groceryList--day">
          <h3>Tuesday</h3>
          <select name="recipe" onChange={addRecipeToList} id="recipes">
            <option value="0">Please Select A Recipe</option>
            {recipes.map((r) => {
              if (r.usersId === activeUser) {
                return <option   key={r.id}  value={r.id}>{r.name}</option>;
              }
            })}
          </select>
        </div>
        <div className="groceryList--day">
          <h3>Wednesday</h3>
          <select name="recipe" onChange={addRecipeToList} id="recipes">
            <option value="0">Please Select A Recipe</option>
            {recipes.map((r) => {
              if (r.usersId === activeUser) {
                return <option   key={r.id} value={r.id}>{r.name}</option>;
              }
            })}
          </select>
        </div>
        <div className="groceryList--day">
          <h3>Thursday</h3>
          <select name="recipe" onChange={addRecipeToList} id="recipes">
            <option value="0">Please Select A Recipe</option>
            {recipes.map((r) => {
              if (r.usersId === activeUser) {
                return <option   key={r.id} value={r.id}>{r.name}</option>;
              }
            })}
          </select>
        </div>
        <div className="groceryList--day">
          <h3>Friday</h3>
          <select name="recipe" onChange={addRecipeToList} id="recipes">
            <option value="0">Please Select A Recipe</option>
            {recipes.map((r) => {
              if (r.usersId === activeUser) {
                return <option   key={r.id} value={r.id}>{r.name}</option>;
              }
            })}
          </select>
        </div>
        <div className="groceryList--day">
          <h3>Saturday</h3>
          <select name="recipe" onChange={addRecipeToList} id="recipes">
            <option value="0">Please Select A Recipe</option>
            {recipes.map((r) => {
              if (r.usersId === activeUser) {
                return <option    key={r.id} value={r.id}>{r.name}</option>;
              }
            })}
          </select>
        </div>
      </div>
      <button
        onClick={(event) => {
          event.preventDefault();
          handleSaveList();
        }}
        className="btn--saveList"
      >
        Save List
      </button>
    </div>
  );
};
