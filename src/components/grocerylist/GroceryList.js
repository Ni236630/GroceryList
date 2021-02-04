import React, { useContext, useEffect} from 'react'
import { GroceryListContext } from './GroceryProvider'
import { GroceryCard } from './GroceryCard'

import '../recipies/Recipe.css'

export const GroceryList = () => {
  
  const {grocerylists, getGroceryLists} = useContext(GroceryListContext)
  
  
  
  useEffect(() =>{
    getGroceryLists()
  },[])// eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      <div className="GroceryList__container recipe">
      <h1>Your Grocery Lists:</h1>
      {/*adds button to direct to form to add new recipe*/}
      <ul>
        
      {grocerylists.map(gl => {
        return <li key={gl.id}>
          <GroceryCard key={gl.id} groceryList={gl} /></li>
      })}
      </ul>
    </div>
    </>
  )
}