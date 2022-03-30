
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
        console.log("!!!!!!!!", data)
        setUser(data)
      })
  }, [])

  function getFridge(id) {
    fridges.find(fridge => fridge.id === id)
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
        <FridgeContainer fridges={fridges} handleClick={setSelectedFridge} />
        <ViewContainer selectedFridge={selectedFridge} submitNew={submitNew} />
      </div>
    </div>

  );
}

export default App;
