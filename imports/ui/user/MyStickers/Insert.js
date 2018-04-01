import {Meteor} from "meteor/meteor"
import React from "react";
import "./Insert.css";
import {Stickers} from "../../../../imports/api/collections/stickers.js";
import {Names} from "../../../api/collections/names.js";

export class Insert extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            number: ""
        }

        this.numberChange = this.numberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    numberChange(e){
        this.setState({
            number: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.state.number < 0 || this.state.number > 669){
            alert("The range of stickers in the album is (0-669)")
        }
        else{
            let id = Meteor.userId();
            let cellphone = Meteor.user().profile.phone;
            let player = Names.findOne({Num: parseInt(this.state.number)});
            Meteor.call("names.findByNum", parseInt(this.state.number), (err, result) =>{
                let player = result;
                let pName = player.Name.slice(0,-3);
                let pCountry = player.Country;
                Meteor.call("stickers.insert", this.state.number, id, cellphone, pName, pCountry);
            } );
        }
        
    }

    render(){
        return(
            <div>
                <div className="container" id="add-container">
                    <div className="row">
                        <div className="col-sm-12">
                            <p> Add a new repeated sticker </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    Enter Sticker Number:
                                    <input type="number" name="number" placeholder="Sticker Number" onChange={this.numberChange}/>
                                </label>
                                <input type="submit" className="submit" value="Add"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}