import {Meteor} from "meteor/meteor";
import {Mongo} from "meteor/mongo";
import {check} from "meteor/check";

export const Names = new Mongo.Collection("names");

Meteor.methods({
    "names.findByNum"(pNum){
        check(pNum, Number);
        return Names.findOne({Num: pNum});
    },

    "names.findByName"(pName){
        check(pName, String);
        return Names.find({Name:{$regex: pName} }).fetch();
    }
});