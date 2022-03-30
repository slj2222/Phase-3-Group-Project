import React from "react"

function FoodItem({food}) {
    // console.log(food)
    return (
        <div className="food-item">
            <div className="food-name">{food.name}</div>
            <div className="food-quantity">{food.quantity}</div>
        </div>
    )

}


export default FoodItem