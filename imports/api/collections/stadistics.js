import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Stadistics = new Mongo.Collection("stadistics");

if(Meteor.isServer) {
    Meteor.publish("stadistics", function publishStadistics() {
        return Stadistics.find();
    });

}

Meteor.methods({
    "stadistics.updatesInfo"(id, quantityUpdate, pNum) {
        check(id, String);
        check(quantityUpdate, Number);
        check(pNum, String);
        
        Stadistics.remove(id);

        Stadistics.insert({
            _id: id,
            quantity: quantityUpdate,
            number: pNum
        });
        
    },

    "stadistics.findByNum"(pNum){
        check(pNum, String);
        return Stadistics.findOne({number: pNum})
    }
});