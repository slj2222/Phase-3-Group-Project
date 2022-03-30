import React from "react";
import { Route, Switch, useParams, Link } from "react-router-dom";
import FridgeDetail from './FridgeDetail';
import NewFridgeForm from './NewFridgeForm';
import EditFridgeForm from './EditFridgeForm';

function ViewContainer({selectedFridge, submitNew }) {
    const params = useParams();
    console.log(params)

    


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
                    <FridgeDetail fridge={selectedFridge}/>
                </Route>
            </Switch>
            
        </div>
    ) 
}




export default ViewContainer