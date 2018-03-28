import React from "react";
import "./login.css";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        });
    }
    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.username === "John" && this.state.password === "1234") {
            this.props.history.push("/menu");
        }
    }
    render() {
        return (
            <div>
                <div className="container-fluid" id="login-container">
                    <h2> Login </h2>
                    <form>
                        <label>
                            <div className="row">
                                <div className="col-sm-5">
                                    Username:
                                    </div>
                                <div className="col-sm-7">
                                    <input type="text" name="text" placeholder="Username" autoComplete="on" onChange={this.handleUsernameChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-5">
                                    Password:
                                    </div>
                                <div className="col-sm-7">
                                    <input type="password" name="text" placeholder="Password" autoComplete="off" onChange={this.handlePasswordChange} />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <input type="submit" value="Sign Up" className="submit" onClick={this.handleSubmit} />
                            </div>

                        </label>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);