/**
 * Created by AchalaKavinda on 11/6/2017.
 */

'use strict'

var mongoose = require ('mongoose');
var Schema = mongoose.Schema;


var customerSchema = new Schema({
    id:{
        type:Number,
        require:'Please Provide Number'
    },
    number: {
      type: String,
      required: 'Kindly enter the name of the task'
    }  
  });

module.exports = mongoose.model('Customers', customerSchema);