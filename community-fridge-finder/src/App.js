
import './App.css';
import React, {useEffect, useState} from "react";
import Header from "./components/Header"
import FridgeContainer from './components/FridgeContainer';
import ViewContainer from './components/ViewContainer';


function App() {
  
  const [fridges, setFridges] = useState([])
  const [selectedFridge, setSelectedFridge] = useState()

  useEffect(() => {
      fetch("http://localhost:9292/fridges")
        .then(res => res.json())
        .then(data => setFridges(data))
    }, [])
  
  function getFridge(id){
    fridges.find(fridge => fridge.id === id)
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <FridgeContainer fridges={fridges} handleClick={setSelectedFridge}/>
        <ViewContainer selectedFridge={selectedFridge}/>
      </div>
    </div>
    
  );
}

export default App;
