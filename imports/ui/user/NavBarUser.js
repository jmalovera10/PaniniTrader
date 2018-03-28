import React from "react";
import "./NavBarUser.css";
import { withRouter } from "react-router-dom";

class NavBarUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleLogOut(event){
        this.props.history.push("/");
    }

    render() {
        return (
            <div id="navigation">
                <nav className="navbar sticky-top navbar-expand-lg navbar-dark" >
                    <a className="navbar-brand" href="#">
                        <h3>PaniniTrader</h3>
                    </a>

                    <h4 className="btnLogOut" onClick={this.handleLogOut}> Log Out </h4>
                </nav>
            </div>
        );
    }
}


export default withRouter(NavBarUser);