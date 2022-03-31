import React from "react";
import { Link } from 'react-router-dom';
function FridgeCard({fridge, handleClick}) {

    return (
        <div className="fridge-card">
            <div className="fridge-name">{fridge.location}</div>
            <div className="fridge-door">
                <Link 
                    to={`/fridges/${fridge.id}`}
                    onClick={() =>handleClick(fridge)}
                >
                    <span>s</span><span>e</span><span>e</span> <span>m</span><span>o</span><span>r</span><span>e</span><span>!</span>
                </Link>
            </div>
        </div>
        
    )
}







export default FridgeCard;