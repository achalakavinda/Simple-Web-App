/**
 * Created by AchalaKavinda on 11/7/2017.
 */

'use strict'

var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    username:{
        type:String,
        require:'username is required'
    },
    password:{
        type:String,
        require:"password is required"
    },
    name:{
        type:String,
        require:'name is required'
    }
});

module.exports = mongoose.model('User',userSchema);