import React from "react";
import FoodItem from "./FoodItem";

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
            <ul>List of Food
                {mapFridgeFoods}
            </ul>
        </div>
        
    )
}







export default FridgeCard;