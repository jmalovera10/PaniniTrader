import {Meteor} from "meteor/meteor";
import React from "react";
import NavBarUser from "./NavBarUser.js";
import "./UserMenu.css";
import Filter from "./Filter/filter.js";
import {withTracker} from "meteor/react-meteor-data";
import {Stickers} from "../../api/collections/stickers.js";
import{Sticker} from "./Components/Sticker.js";

class UserMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "noFilter",
            typeFilter: "noFilter"
        }

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(){
        console.log("onFilter");
        let filterToApply = localStorage.getItem("filter");
        let typeFilterToApply = localStorage.getItem("typeFilter");
        console.log(filterToApply);
        console.log(typeFilterToApply);
        this.setState({filter: filterToApply});
        this.setState({typeFilter: typeFilterToApply});
    }

    renderSticker(){
        console.log(this.props.stickers);
        return this.props.stickers.map((sticker) =>(
            <Sticker key={sticker._id} id={sticker._id} number={sticker.number} owner={sticker.owner} phone={sticker.phone}/>
        ));
    }

    render() {
        return (
            <div>
                <NavBarUser />
                <br />
                <div className="container-fluid">
                    <h1>Welcome! </h1>
                    <br />
                    <div className="row">
                        <div className="col-sm-4">
                            <Filter onFilter={this.handleFilter}/>
                        </div>
                        <div className="col-sm-8">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h2> Most Recent Publications! </h2>
                                </div>
                            </div>
                            <div className="row">
                            {
                                console.log("props")
                            }
                            {
                                console.log(this.props)
                            }
                                {this.renderSticker()}
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default withTracker(()=>{
    let userId = Meteor.userId();
    return {
        stickers: Stickers.find({owner:{$ne:userId}}).fetch(),
    };
}) (UserMenu);