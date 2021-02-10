import React, { useContext, useEffect } from "react";
import { GroceryListContext } from "./GroceryProvider";
import { GroceryCard } from "./GroceryCard";
import { useHistory } from 'react-router-dom'
import BackButton from '../icons/Back'
import "../recipies/Recipe.css";

export const GroceryList = () => {
  const { grocerylists, getGroceryLists, deleteGroceryList } = useContext(GroceryListContext);
  const activeUser = parseInt(localStorage.getItem("grocery_customer"));
  
  const history = useHistory()

  useEffect(() => {
    getGroceryLists();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps



  return (
    <>
      <div className="GroceryList__container recipe">
      <div className="button__container" onClick={() => history.push("/")}><BackButton className ="button--Back" /></div>
        <h1>Your Grocery Lists:</h1>
        {/*adds button to direct to form to add new recipe*/}
        <ul>
          {
           
           grocerylists.map((gl) => {
            if (gl.usersId === activeUser) {
              return (
                <li key={gl.id}>
                <GroceryCard key={gl.id} groceryList={gl} /><button className="btn--deleteList" onClick={()=>{deleteGroceryList(gl.id)}}>delete</button>
                </li>
              )
            } else {
              return 
            }
          })
            }
          
        </ul>
      </div>
    </>
  );
};
