import { Meteor } from "meteor/meteor";
import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Names } from "../../../api/collections/names.js";

class Filter extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="filterSelection">
                    <h2 className="filterSelection">Filter your selection:</h2>
                    <br />
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <h5>Search by name:</h5>
                            <div className="dropdown">
                                <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Name <span className="caret"></span></button>
                                <ul className="dropdown-menu">
                                    {this.props.names.map((stickerInfo) => (
                                        <li><a>{stickerInfo.Name}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <h5>Search by number:</h5>
                            <div className="dropdown">
                                <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Number <span className="caret"></span></button>
                                <ul className="dropdown-menu">
                                    {this.props.names.map((stickerInfo) => (
                                        <li><a>{stickerInfo.Num}</a></li>
                                    ))}
                                </ul>
                                <input type="number" name="number" placeholder="number" />
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default withTracker(() => {
    let userId = Meteor.userId();
    return {
        names: Names.find().fetch(),
    };
})(Filter);