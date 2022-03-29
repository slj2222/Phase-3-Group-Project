
import './App.css';
import React from "react";
import Header from "./components/Header"
import FridgeContainer from './components/FridgeContainer';
import ViewContainer from './components/ViewContainer';


function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <FridgeContainer />
        <ViewContainer />
      </div>
    </div>
    
  );
}

export default App;
