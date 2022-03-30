import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import FoodItem from './FoodItem';

export default function FridgeDetail({fridge, addNewFood}) {
  
  const params = useParams();
  const [showForm, setShowForm] = useState(false)
  const [newFood, setNewFood]  = useState({
    name: '',
    quantity: 1,
  })

  function handleNewFoodSubmit(e){
    e.preventDefault();
    addNewFood(newFood, fridge.id)
  }

  return (
    <div>
        {fridge ?
            <div>
                <h1>{fridge.location}</h1>
                {fridge.foods.map(food =>{
                  return <FoodItem food={food} key={food.id} />
                })}
                {!showForm && <button onClick={() => setShowForm(true)}>Add Food</button>}
                {showForm && 
                  <form onSubmit={e => handleNewFoodSubmit(e)}>
                    <label htmlFor="name">What did you drop off:
                      <input 
                        onChange={e => setNewFood({...newFood, name: e.target.value})}
                        type="text" 
                        id="name" 
                        name="name" 
                        value={newFood.name}/>
                    </label>
                    <label htmlFor="quantity">
                      <input 
                        type="number"
                        name="quantity"
                        id="quantity"
                        value={newFood.quantity}
                        onChange={e => setNewFood({...newFood, quantity: e.target.value})}
                        min={1}
                      />
                    </label>
                    <input type="submit" value="Add food"/>
                  </form>
                }
            </div>
        : <p>GO CLICK ON SOMETHING</p>
        }

    </div>
  )
}
