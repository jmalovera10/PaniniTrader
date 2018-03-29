import {Meteor} from "meteor/meteor";
import React from "react";
import NavBarUser from "../NavBarUser.js";
import {withTracker} from "meteor/react-meteor-data";

export class MyStickers extends React.Component{
    render(){
        return(
            <div>
                <NavBarUser/>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-sm-8">
                        <h2> My repeated stickers</h2>
                    </div>
                    <div className = "col-sm-4">
                        <h2> Add repeated sticker </h2>
                    </div>
                </div>
            </div>
        );
    }
}