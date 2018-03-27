import React from "react";
import "./signup.css";

export class SignUp extends React.Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();

    }
    render(){
        return(
            <div className="row">
                <div className="col-sm-12">
                    <div className="container-fluid" id="signup-container">
                    <h2> Sign up </h2>
                        <form>
                            <label>
                                <div className = "row">
                                    <div className="col-sm-3">
                                    First Name:
                                    </div>
                                    <div className="col-sm-9">
                                        <input type="text" name="text" placeholder="Enter your name" autoComplete="on"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                    Surname:
                                    </div>
                                    <div className="col-sm-9">
                                        <input type="text" name="text" placeholder="Enter your surname" autoComplete="on"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">                                
                                    Username:
                                    </div>
                                    <div className="col-sm-9">
                                        <input type="text" name="text" placeholder="Username" autoComplete="on"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                    Password:
                                    </div>
                                    <div className="col-sm-9">
                                        <input type="password" name="text" placeholder="Password" autoComplete="off"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        Confirm Password:
                                    </div>
                                    <div className="col-sm-9">
                                        <input type="password" name="text" placeholder="Confirm Password" autoComplete="off"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                    E-Mail:
                                    </div>
                                    <div className="col-sm-9">
                                        <input type="email" name="text" placeholder="Enter your email" autoComplete="email"/>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <input type="submit" value="Sign Up" className="submit" onClick={this.handleSubmit}/>
                                </div>

                            </label>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}