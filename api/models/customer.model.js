/**
 * Created by AchalaKavinda on 11/6/2017.
 */

'use strict'

var mongoose = require ('mongoose');
var Schema = mongoose.Schema;


var customerSchema = new Schema({
    number: {
        type: String,
        required: 'Kindly enter the name of the task'
    },
    name: {
      type: String,
      required: 'Kindly enter the name of the task'
    }  ,
    password: {
        type: String,
        required: 'Kindly enter the name of the task'
    }
});

module.exports = mongoose.model('Customers', customerSchema);