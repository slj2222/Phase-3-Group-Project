import React from "react"

function FoodItem({ food, removeFood }) {
    // console.log(food)


    return (
        <div className="food-item">
            <div className="food-name">{food.name}</div>
            <div className="food-quantity">{food.quantity}</div>
            <button onClick={() => removeFood(food.id)}>delete</button>
        </div>
    )

}


export default FoodItem