import React, { useEffect, useState } from "react";
import FridgeCard from "./FridgeCard";

function FridgeContainer() {

    const [fridges, setFridges] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/fridges")
          .then(res => res.json())
          .then(data => setFridges(data))
      }, [])
    
      console.log(fridges)
      
      const mapFridges = fridges.map(fridge => {
          return <FridgeCard key={fridge.id} fridge={fridge}/>
      })
      


    return (
        <div>
            <h2>select a fridge</h2>
            {mapFridges}
        </div>
        
    )
}





export default FridgeContainer;