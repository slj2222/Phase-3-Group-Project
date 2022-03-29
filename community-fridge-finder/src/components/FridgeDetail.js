import React from 'react';
import { useParams } from 'react-router-dom';

export default function FridgeDetail({fridge}) {
  const params = useParams();
  return (
    <div>
        {fridge ?
            <div>
                <h1>{fridge.location}</h1>
                {fridge.foods.map(food =>{
                    return <p>{food.name}</p>
                })}
            </div>
        : <p>GO CLICK ON SOMETHING</p>
        }

    </div>
  )
}
