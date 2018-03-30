import {Meteor} from "meteor/meteor";
import React from "react";
import "./Sticker.css";
import {Stickers} from "../../../api/collections/stickers.js"

export class Sticker extends React.Component{
    constructor(props){
        super(props);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
    }

    handleRemoveClick(){
        Stickers.remove(this.props.id);
    }

    renderButton(){
        let userId = Meteor.userId();
        if(this.props.owner === userId){
            return <button type="button" onClick={this.handleRemoveClick} className="btn btn-danger btn-sm btn-block">Remove</button>
        }
        else{
            return <button type="button" onClick={this.handleRemoveClick} className="btn btn-success btn-sm btn-block">Contact</button>
        }
    }

    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <p> Player Name </p>
                        </div>                         
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2000px-User_icon_2.svg.png" alt="Player image"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <p> {this.props.number} </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            {this.renderButton()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}