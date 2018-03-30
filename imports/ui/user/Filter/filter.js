import React from "react";

export class Filter extends React.Component{
    render(){
        return(
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
                                    <h5>Search by number:</h5>
                                    <div className="dropdown">
                                        <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Number <span className="caret"></span></button>
                                        <input type="number" name="number" placeholder="number"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                        </div>
                    </div>
        );
    }
}