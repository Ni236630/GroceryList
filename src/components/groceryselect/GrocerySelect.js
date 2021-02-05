import React, { useContext, useEffect, useState } from "react";
import { RecipeContext } from "../recipies/RecipeProvider";
import '../recipies/Recipe.css'
import './GrocerySelect.css'

export const GrocerySelectList = () => {
  const activeUser = parseInt(localStorage.getItem("grocery_customer"));
  const {recipes, getRecipes} = useContext(RecipeContext);

  const [groceryList, setGroceryList] = useState({
    name: "",
    usersId: activeUser,
  });

  useEffect(() => {
    getRecipes();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
              className="from-control"
              placeholder="List Name"
              value={groceryList.name}
            />
          </div>
        </fieldset>
    <div className="groceryList__container">
      <div className="groceryList--day">
        <h3>Sunday</h3>
        <select id="recipes">
          <option value='0'>Please Select A Recipe</option>
          {recipes.map(r =>{
            if(r.usersId === activeUser){
              return <option value={r.id}>{r.name}</option>
            }
          })}
        </select>
      </div>
      <div className="groceryList--day">
        <h3>Monday</h3>
        <select id="recipes">
          <option value='0'>Please Select A Recipe</option>
          {recipes.map(r =>{
            if(r.usersId === activeUser){
              return <option value={r.id}>{r.name}</option>
            }
          })}
        </select>
      </div>
      <div className="groceryList--day">
        <h3>Tuesday</h3>
        <select id="recipes">
          <option value='0'>Please Select A Recipe</option>
          {recipes.map(r =>{
            if(r.usersId === activeUser){
              return <option value={r.id}>{r.name}</option>
            }
          })}
        </select>
      </div>
      <div className="groceryList--day">
        <h3>Wednesday</h3>
        <select id="recipes">
          <option value='0'>Please Select A Recipe</option>
          {recipes.map(r =>{
            if(r.usersId === activeUser){
              return <option value={r.id}>{r.name}</option>
            }
          })}
        </select>
      </div>
      <div className="groceryList--day">
        <h3>Thursday</h3>
        <select id="recipes">
          <option value='0'>Please Select A Recipe</option>
          {recipes.map(r =>{
            if(r.usersId === activeUser){
              return <option value={r.id}>{r.name}</option>
            }
          })}
        </select>
      </div>
      <div className="groceryList--day">
        <h3>Friday</h3>
        <select id="recipes">
          <option value='0'>Please Select A Recipe</option>
          {recipes.map(r =>{
            if(r.usersId === activeUser){
              return <option value={r.id}>{r.name}</option>
            }
          })}
        </select>
      </div>
      <div className="groceryList--day">
        <h3>Saturday</h3>
        <select id="recipes">
          <option value='0'>Please Select A Recipe</option>
          {recipes.map(r =>{
            if(r.usersId === activeUser){
              return <option value={r.id}>{r.name}</option>
            }
          })}
        </select>
      </div>
    </div>
      <button class="btn--saveList">
              Save List
      </button>
    </div>
   
  );
};
