/**
 * Created by AchalaKavinda on 12/18/2017.
 */


'use strict'

var mongoose = require ('mongoose');
var Schema = mongoose.Schema;


var reservationSchema = new Schema({
    user: {
        type: String,
        required: 'require user'
    },
    email: {
        type: String,
        required: 'require email'
    }  ,
    number: {
        type: String,
        required: 'require number'
    },
    table: {
        type: String,
        required: 'require table'
    },
    guests: {
        type: String,
        required: 'require guests'
    },
    datetime: {
        type: String,
        required: 'require datetime'
    }
});

module.exports = mongoose.model('Reservation', reservationSchema);