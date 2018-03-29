import {Meteor} from "meteor/meteor";
import React from "react";
import {Home} from "./home/Home.js"
import {UserMenu} from "./user/UserMenu.jsx"
import {Link, Route, Switch, Redirect} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";


export const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <PrivateRoute authed={isAuth()} path="/menu" component={UserMenu}/>
        </Switch>
    </BrowserRouter>
);
//Checks if the user is authneticated.
function isAuth(){
    let userId = Accounts.userId();
    if(userId){
        return true;
    }
    else{
        return false;
    }
}
//Renders the private route
const PrivateRoute = ({component: Component, authed, ...rest}) => {
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/', state: {from: props.location}}} />} />
    )
  }