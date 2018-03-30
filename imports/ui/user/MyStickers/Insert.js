import {Meteor} from "meteor/meteor"
import React from "react";
import "./Insert.css";
import {Stickers} from "../../../../imports/api/collections/stickers.js";

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
            Stickers.insert({
                number: this.state.number,
                owner: id
            });

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