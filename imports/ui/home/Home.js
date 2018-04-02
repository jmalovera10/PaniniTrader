import {Meteor} from "meteor/meteor";
import React from "react";
import "./css/Home.css";
import Login from "./login/login.js";
import  SignUp  from "./signup/signup.js";
import {withRouter} from "react-router-dom";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonState: "SignUp"
        }

        this.handleLoginButtonPress = this.handleLoginButtonPress.bind(this);
        this.handleSignUpButtonPress = this.handleSignUpButtonPress.bind(this);
    }
 

    handleLoginButtonPress(e) {
        e.preventDefault();
        if (this.state.buttonState === "SignUp") {
            this.setState({
                buttonState: "Login"
            });
        }

    }
    handleSignUpButtonPress(e) {
        e.preventDefault();
        if (this.state.buttonState === "Login") {
            this.setState({
                buttonState: "SignUp"
            });
        }

    }

    render() {
        const signUpState = this.state.buttonState === "SignUp";
        return (
            <div id="home">
                <div id="navigation">
                    <nav className="navbar navbar-expand-lg navbar-dark" >
                        <a className="navbar-brand" href="#">
                            <h3>PaniniTrader</h3>
                        </a>
                    </nav>
                </div>
                <br />
                <br />
                <div id="home-content">
                    <div className="container-fluid" id="home-container">
                        <div className="row">
                            <div className="col-md-1">
                            </div>
                            <div className="col-md-5">
                                <h4 id="slogan">Panini Trader helps you complete your Panini album easier!</h4>
                                <div id="img-container" className="container-fluid">
                                    <img id="home-image" alt="Image of a stadium with people" src="http://minsvyaz.ru/uploaded/photos/fifa.jpg" />
                                    <p id="img-text"></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="container-fluid" id="form-container">
                                    <div className="row">
                                        <div className="btn-group" role="group" aria-label="button group">
                                            <!--Los colores de background y foreground no tienen el suficiente contraste se recomienda
                                            colores más oscuros-->
                                            <button id="signup" type="button" className="btn btn-primary btn-lg" onClick={this.handleSignUpButtonPress}> SignUp </button>
                                            <button id="login" type="button" className="btn btn-primary btn-lg " onClick={this.handleLoginButtonPress}> Login </button>
                                        </div>
                                    </div>
                                    <br />
                                    {
                                        signUpState ? (<SignUp />) : (<Login />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Home);
