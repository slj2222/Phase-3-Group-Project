import React from "react"

function FoodItem({food}) {
    // console.log(food)
    return (
        <div>
            <h3>{food.name}</h3>
            <h4>{food.quantity}</h4>

        </div>
    )

}


export default FoodItem