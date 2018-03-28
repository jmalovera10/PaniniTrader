import React from "react";
import {Home} from "./home/Home.js"
import {Link, Route, Switch} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";

export const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
        </Switch>
    </BrowserRouter>
);