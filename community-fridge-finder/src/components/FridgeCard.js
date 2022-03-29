import React from "react";
import { Link } from 'react-router-dom';
function FridgeCard({fridge}) {

    return (
        <div>
            <div>{fridge.location}</div>
            <Link to={`/fridges/${fridge.id}`}>
                see more!
            </Link>
            <Link
                to={`/fridges/${fridge.id}/edit`}
            >
                EDIT
            </Link>

        </div>
        
    )
}







export default FridgeCard;