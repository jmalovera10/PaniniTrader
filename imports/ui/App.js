import {Meteor} from "meteor/meteor";
import React from "react";
import Home from "./home/Home.js"
import {Menu} from "../Routes/Menu.js";
import {Link, Route, Switch, Redirect} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";


export const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={()=>(Meteor.userId() ? <Redirect to="/menu"/>: <Home/>)}/>
            <Route authed={isAuth()} path="/menu" render={()=>(Meteor.userId() ? <Menu/> : <Redirect to="/"/>)}/>
        </Switch>
    </BrowserRouter>
);

const requireAuth = (nextState, replace) => {
    if (!Meteor.loggingIn() && !Meteor.userId()) {
      replace({
        pathname: "/",
        state: { nextPathname: nextState.location.pathname },
      });
    }
  };


//Checks if the user is authneticated.
function isAuth(){
    let userId = Meteor.userId();
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