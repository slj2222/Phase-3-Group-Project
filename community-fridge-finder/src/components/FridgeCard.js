import React from "react";
import FoodItem from "./FoodItem";
import { Link } from 'react-router-dom';
function FridgeCard({fridge}) {

    const mapFridgeFoods = fridge.foods.map(food => {
        return (
            <li>
                <FoodItem key={food.id} food={food}/>
            </li>
        )
    })

    return (
        <div>
            <div>{fridge.location}</div>
            <Link to={`/fridges/${fridge.id}`}>
                see more!
            </Link>
            <ul>List of Food
                {mapFridgeFoods}
            </ul>
        </div>
        
    )
}







export default FridgeCard;