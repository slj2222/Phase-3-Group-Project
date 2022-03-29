import React from "react";
import { Route, Switch, useParams } from "react-router-dom";
import FridgeDetail from './FridgeDetail';
import NewFridgeForm from './NewFridgeForm';
import EditFridgeForm from './EditFridgeForm';

function ViewContainer() {
    const params = useParams();
    console.log(params)
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    Details
                </Route>
                <Route exact path="/fridges/new">
                    <NewFridgeForm />
                </Route>
                <Route exact path="/fridges/:id/edit">
                    <EditFridgeForm />
                </Route>
                <Route exact path="/fridges/:id">
                    <FridgeDetail />
                </Route>
            </Switch>
            <button>NEW</button>
            <button>EDIT</button>
            
         
        </div>
    ) 
}




export default ViewContainer