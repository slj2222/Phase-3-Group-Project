
import './App.css';
import React, { useEffect, useState } from "react";
import Header from "./components/Header"
import FridgeContainer from './components/FridgeContainer';
import ViewContainer from './components/ViewContainer';


function App() {

  const [fridges, setFridges] = useState([])
  const [selectedFridge, setSelectedFridge] = useState()
  const [user, setUser] = useState()

  useEffect(() => {
      fetch("http://localhost:9292/fridges")
        .then(res => res.json())
        .then(data => setFridges(data))
      
      fetch("http://localhost:9292/users/1")
        .then(res => res.json())
        .then(data => {
          setUser(data)
        })
    }, [])
  
  function getFridge(id){
    fridges.find(fridge => fridge.id === id)
  }

  function addNewFood(food, fridge_id){
    fetch("http://localhost:9292/foods", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: food.name,
        quantity: food.quantity,
        fridge_id: fridge_id,
        user_id: user.id
      })
    })
    .then(res => res.json())
    .then(body => {
      setSelectedFridge(seletctedFridge => ({...selectedFridge, foods: [...selectedFridge.foods, body]}))
      setFridges(fridges.map(fridge => {
        if(fridge.id === body.fridge_id){
          const newFoods = [...fridge.foods, body];
          return {...fridge, foods: newFoods}
        }
        return fridge
      }))
    })

  }

  function submitNew(newFridgeLocation) {
    fetch("http://localhost:9292/fridges", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        location: newFridgeLocation, 
        user_id: user.id
      })
    }
    )
    .then(res => res.json())
    .then(data => setFridges([...fridges, data]))
  }



  return (
    <div>
      <div>
        <Header user={user} />
      </div>
      <div className="main">
        <FridgeContainer fridges={fridges} handleClick={setSelectedFridge}/>
        <ViewContainer selectedFridge={selectedFridge} addNewFood={addNewFood} submitNew={subimtNew}/>

      </div>
    </div>

  );
}

export default App;
