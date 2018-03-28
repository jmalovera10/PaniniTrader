import React from "react";
import "./css/Home.css";
import {Login} from "./login/login.js";
import {SignUp} from "./signup/signup.js";

export class Home extends React.Component{

    constructor(props){
        super(props);
        this.state={
            buttonState: "SignUp"
        }

        this.handleLoginButtonPress = this.handleLoginButtonPress.bind(this);
        this.handleSignUpButtonPress = this.handleSignUpButtonPress.bind(this);
    }

    handleLoginButtonPress(e){
        e.preventDefault();
        if(this.state.buttonState === "SignUp"){
            this.setState({
                buttonState: "Login"
            });
        }

    }
    handleSignUpButtonPress(e){
        e.preventDefault();
        if(this.state.buttonState === "Login"){
            this.setState({
                buttonState: "SignUp"
            });
        }

    }

    render(){
        const signUpState = this.state.buttonState === "SignUp";
        return(
            <div id = "home">
                <div id = "navigation">
                    <nav className="navbar navbar-expand-lg navbar-dark" >
                        <a className="navbar-brand" href="#"> 
                            <h3>PaniniTrader</h3>
                        </a>
                    </nav>
                </div>
                <br/>
                <br/>
                <div id = "home-content">
                    <div className="container-fluid" id="home-container">
                        <div className = "row">
                            <div className = "col-sm-1">
                            </div>
                            <div className = "col-sm-7">
                                <div id="img-container" className = "container-fluid">
                                    <img id="home-image" alt="Image of a stadium with people" src="https://images.pexels.com/photos/270085/pexels-photo-270085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                                    <p id="img-text"> The World Cup is here, so it´s time for you to complete your Panini </p>
                                </div>
                            </div>
                            <div className = "col-sm-4">
                                <div className="container-fluid" id = "form-container">
                                    <div className="row">
                                        <div className = "btn-group" role="group" aria-label="button group">    
                                            <button id="signup" type="button" className="btn btn-primary btn-lg" onClick={this.handleSignUpButtonPress}> SignUp </button>
                                            <button id="login" type="button" className="btn btn-primary btn-lg " onClick={this.handleLoginButtonPress}> Login </button>
                                        </div>
                                    </div>
                                    <div className = "row">
                                        <div className="col-sm-12">
                                        <br/>
                                            {
                                                signUpState ? (<SignUp/>) : (<Login/>)
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}