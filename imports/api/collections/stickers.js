import {Meteor} from "meteor/meteor";
import {Mongo} from "meteor/mongo";
import {check} from "meteor/check";
export const Stickers = new Mongo.Collection("stickers");

Meteor.methods({
    "stickers.remove"(id){
        check(id, String);

        Stickers.remove(id);
    },

    "stickers.insert"(pnumber, powner, pphone, pname, pcountry){
        
        check(pnumber, String);
        check(powner, String);
        check(pphone, String);
        check(pname,String);
        check(pcountry, String);
        

        Stickers.insert({
            number: pnumber,
            owner: powner,
            phone: pphone,
            name: pname,
            country: pcountry
        });
    }
});