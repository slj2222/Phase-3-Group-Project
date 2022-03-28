import React from "react";

function FridgeCard({fridge}) {

    return (
        <div>
            <div>{fridge.location}</div>
            <ul>List of Food
                <li>Food 1</li>
                <li>Food 2</li>
                <li>Food 3</li>
            </ul>
        </div>
        
    )
}







export default FridgeCard;