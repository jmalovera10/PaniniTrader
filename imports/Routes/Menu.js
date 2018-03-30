import React from "react";
import {Switch, Route} from "react-router-dom";
import UserMenu from "../ui/user/UserMenu.jsx";
import MyStickers from "../ui/user/MyStickers/MyStickers.jsx"

export const Menu = () =>(
    <Switch>
        <Route exact path="/menu" component={UserMenu} />
        <Route path="/menu/myrepeated" component={MyStickers} />
    </Switch>
);