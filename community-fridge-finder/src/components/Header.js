import React from "react"
import { Link } from 'react-router-dom';
// import logo from "../fridge_logo.png";

function Header({user}){
    return (
        <header className="header">
            {/* <span>
            <image src={logo} alt="community fridge logo: rainbow people holding hands, encircling an open and full fridge"/>
            </span> */}
            <Link to="/fridges/">
                <h1>Community Fridge Finder</h1>
            </Link>
            {user && <h4>Welcome, {user.first_name}</h4>}
        </header>
        
    )
}





export default Header