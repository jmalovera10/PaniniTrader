import { Meteor } from "meteor/meteor";
import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Names } from "../../../api/collections/names.js";
import { Groups } from "../../../api/collections/groups.js";


class Filter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            number: ""
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.numberChange = this.numberChange.bind(this);
        this.handleTeamChange = this.handleTeamChange.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleNameChange(e) {
        e.preventDefault();
        localStorage.setItem("filter", e.target.value);
        localStorage.setItem("typeFilter", "name");
        let callback = this.props.onFilter;
    }

    handleTeamChange(e) {
        e.preventDefault();
        localStorage.setItem("filter", e.target.value);
        localStorage.setItem("typeFilter", "Team");
    }
    
    handleNumberChange(e){
        e.preventDefault();
        localStorage.setItem("filter", e.target.value);
        localStorage.setItem("typeFilter", "Number");
    }

    numberChange(e) {
        e.preventDefault();
        this.setState({
            number: e.target.value
        });
    }

    handleSearch(){
        if(this.state.number < 0 || this.state.number > 669){
            alert("The range of stickers in the album is (0-669)")
        }
        else{
            localStorage.setItem("filter",this.state.number );
            localStorage.setItem("typeFilter", "Number");
        }
    }

    handleReset() {
        localStorage.setItem("filter", "noFilter");
        localStorage.setItem("typeFilter", "noFilter");
    }

    render() {
        return (
            <div className="filterSelection">
                <h2 className="filterSelection">Filter your selection:</h2>
                <br />
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <input type="submit" className="submit resetBtn" value="Reset filter" onClick={this.handleReset} />
                        <br />
                        <br />
                        <h5>Search by name:</h5>
                        <div className="formFilter">
                            <form>
                                <label>
                                    <select onChange={this.handleNameChange}>
                                        {this.props.names.map((name) => (
                                            <option className="dropdown-item" key={name.Num}>{name.Name}</option>
                                        ))}
                                    </select>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <h5>Search by team:</h5>
                        <div className="formFilter">
                            <form>
                                <label>
                                    <select onChange={this.handleTeamChange}>
                                        {this.props.groups.map((group) => (
                                            <option className="dropdown-item" key={group.Group}>{group.Group}</option>
                                        ))}
                                    </select>
                                </label>
                            </form>

                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <h5>Search by number:</h5>

                        <div className="formFilter">
                            <form>
                                <label>
                                    <select onChange={this.handleNumberChange}>
                                        {this.props.names.map((stickerInfo) => (
                                            <option key={stickerInfo.Num}>{stickerInfo.Num}</option>
                                        ))}
                                    </select>
                                </label>
                            </form>

                        </div>
                        <input type="number" name="number" placeholder="number" onChange={this.numberChange} />
                        <input type="submit" className="submit" value="Search" onClick={this.handleSearch} />
                        <br />
                        <br />

                    </div>
                </div>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        names: Names.find().fetch(),
        groups: Groups.find().fetch()
    };
})(Filter);