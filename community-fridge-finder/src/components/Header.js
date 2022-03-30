import React from "react"

function Header({user}){
    return (
        <header className="header">
            <h1>Community Fridge Finder</h1>
            {user && <h4>Welcome, {user.first_name}</h4>}
        </header>
    )
}





export default Header