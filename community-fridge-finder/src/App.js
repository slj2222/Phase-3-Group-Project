
import './App.css';
import React from "react";
import Header from "./components/Header"
import FridgeContainer from './components/FridgeContainer';

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <FridgeContainer />
      </div>
    </div>
    
  );
}

export default App;
