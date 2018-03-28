import React from "react";
import {Home} from "./home/Home.js"
import {UserMenu} from "./user/UserMenu.jsx"
import {Link, Route, Switch} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";

export const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/menu" component={UserMenu}/>
        </Switch>
    </BrowserRouter>
);