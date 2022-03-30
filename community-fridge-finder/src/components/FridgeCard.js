import React from "react";
import { Link } from 'react-router-dom';
function FridgeCard({fridge, handleClick}) {

    return (
        <div>
            <div>{fridge.location}</div>
            <Link 
                to={`/fridges/${fridge.id}`}
                onClick={() =>handleClick(fridge)}
            >
                see more!
            </Link>
        
        </div>
        
    )
}







export default FridgeCard;