import React from "react";
import { Route, Switch, useParams, Link } from "react-router-dom";
import FridgeDetail from './FridgeDetail';
import NewFridgeForm from './NewFridgeForm';
import EditFridgeForm from './EditFridgeForm';

function ViewContainer({selectedFridge, addNewFood}) {
    const params = useParams();
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
                    <EditFridgeForm fridge={selectedFridge}/>
                </Route>
                <Route exact path="/fridges/:id">
                    <FridgeDetail fridge={selectedFridge} addNewFood={addNewFood}/>
                </Route>
            </Switch>
            <button>
                <Link to="/fridges/new">
                    NEW    
                </Link>
            </button>
        </div>
    ) 
}




export default ViewContainer