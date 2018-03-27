import React from "react";
import "./login.css";

export class Login extends React.Component{
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
                    <div className="container-fluid" id="login-container">
                    <h2> Login </h2>
                        <form>
                            <label>
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