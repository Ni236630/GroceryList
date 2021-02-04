import React from 'react'
import {Link} from 'react-router-dom'

export const GroceryCard = ({ groceryList }) =>{
  return (
    <div className="groceryCard">
     
    <Link to={`/grocerylists/detail/${groceryList.id}`}>
       <h1 className="groceryCard__name">{groceryList.name}</h1>
    </Link>  
    </div>
  )
}