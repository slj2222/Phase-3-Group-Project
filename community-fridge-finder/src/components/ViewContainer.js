import React from "react";
import { Route, Switch, Link, useParams } from "react-router-dom";

function ViewContainer() {
    const params = useParams();
    console.log(params)
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    Details
                </Route>
                <Route exact path="/fridges/:id">
                    Detail of fridge with Id here
                </Route>
            </Switch>
            <button>NEW</button>
            <button>EDIT</button>
            
         
        </div>
    ) 
}




export default ViewContainer