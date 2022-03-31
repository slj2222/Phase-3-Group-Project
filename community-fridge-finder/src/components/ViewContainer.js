import React from "react";
import { Route, Switch, useParams, Link } from "react-router-dom";
import FridgeDetail from './FridgeDetail';
import NewFridgeForm from './NewFridgeForm';
import EditFridgeForm from './EditFridgeForm';

function ViewContainer({ removeFood, selectedFridge, addNewFood, submitNew, editFood }) {
    const params = useParams();

    return (
        <div>
            <Switch>
                <Route exact path="/">
                    Details
                </Route>
                <Route exact path="/fridges/new">
                    <NewFridgeForm submitNew={submitNew} />
                </Route>
                <Route exact path="/fridges/:id/edit">
                    <EditFridgeForm fridge={selectedFridge}/>
                </Route>
                <Route exact path="/fridges/:id">
                    <FridgeDetail editFood={editFood} removeFood={removeFood} fridge={selectedFridge} addNewFood={addNewFood}/>
                </Route>
            </Switch>
            
        </div>
    ) 
}




export default ViewContainer