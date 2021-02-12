import React, { useContext, useEffect } from "react";
import { GroceryListContext } from "./GroceryProvider";
import { GroceryCard } from "./GroceryCard";
import { useHistory } from "react-router-dom";
import BackButton from "../icons/Back";
import DeleteButton from "../icons/Delete";
import "../recipies/Recipe.css";
import './Grocery.css'

export const GroceryList = () => {
  const { grocerylists, getGroceryLists, deleteGroceryList } = useContext(
    GroceryListContext
  );
  const activeUser = parseInt(localStorage.getItem("grocery_customer"));

  const gList = grocerylists.filter((gl) => gl.usersId === activeUser);
  console.log(gList);

  const history = useHistory();

  useEffect(() => {
    getGroceryLists();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="GroceryList__container recipe">
        <div className="button__container" onClick={() => history.push("/")}>
          <BackButton className="button--Back" />
        </div>
        <h1>Your Grocery Lists:</h1>
        <ul>
          {gList.length !== 0 ? (
            gList.map((i) => {
              return (
                <li key={i.id}>
                  <div className="groceryName">
                    <GroceryCard key={i.id} groceryList={i} />
                    <div className="button__container--detail groceryDelete">
                      <div
                        onClick={() => {
                          deleteGroceryList(i.id);
                        }}
                      >
                        <DeleteButton className="button--delete" />
                      </div>
                    </div>
                  </div>
                </li>
              );
            })
          ) : (
            <div>
              {" "}
              <h3>You currently don't have any lists </h3>
            </div>
          )}
        </ul>
      </div>
    </>
  );
};
