import React from "react";
import NavBarUser from "./NavBarUser.js";
import "./UserMenu.css";

export class UserMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBarUser />
                <br />
                <div className="container-fluid" >
                    <h1>Welcome! </h1>
                    <br />
                    <div className="row filterSelection">
                        <div className="col-sm-4">
                            <h2 className="filterSelection">Filter your selection:</h2>
                            <br />
                            <div className="row">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-10">
                                    <h5>Choose the national team:</h5>
                                    <div className="dropdown">
                                        <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">National teams <span className="caret"></span></button>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-header">Colombia</li>
                                            <li><a href="#">James "Tatareto" Rodriguez</a></li>
                                            <li><a href="#">Falcao "Rodilla frágil" García</a></li>
                                            <li><a href="#">David "La Araña" Ospina</a></li>
                                            <li><a href="#">Mohamed Amine Ben Amor </a></li>
                                            <li className="divider"></li>
                                            <li className="dropdown-header">Russia</li>
                                            <li><a href="#">Putin</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-10">
                                    <h5>Or Choose the number:</h5>
                                    <div className="dropdown">
                                        <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Number of the Sticker <span className="caret"></span></button>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}