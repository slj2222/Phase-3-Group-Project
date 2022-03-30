import React, { useEffect, useState } from "react";
import FridgeCard from "./FridgeCard";
import ViewContainer from './ViewContainer'

function FridgeContainer({handleClick}) {

    const [fridges, setFridges] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/fridges")
          .then(res => res.json())
          .then(data => setFridges(data))
      }, [])
    
      
      const mapFridges = fridges.map(fridge => {
          return <FridgeCard key={fridge.id} fridge={fridge} handleClick={handleClick}/>
      })
      


    return (
        <div className="fridge-list">
            <h2>select a fridge</h2>
            {mapFridges}
        </div>
        
    )
}





export default FridgeContainer;