import React, { useEffect, useState } from "react";
import FridgeCard from "./FridgeCard";
// import ViewContainer from './ViewContainer'
import { Link } from "react-router-dom"

function FridgeContainer({fridges, handleClick, deleteFridge}) {

    
      
      const mapFridges = fridges.map(fridge => {
          return <FridgeCard key={fridge.id} fridge={fridge} handleClick={handleClick} deleteFridge={deleteFridge}/>
      })
      
      


    return (
        <div className="fridge-list">
            <h2>select a fridge</h2>
            {mapFridges}
            <button>
                <Link to="/fridges/new">
                    NEW    
                </Link>
            </button>
        </div>
        
    )
}





export default FridgeContainer;