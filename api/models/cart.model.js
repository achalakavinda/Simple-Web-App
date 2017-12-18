/**
 * Created by AchalaKavinda on 12/18/2017.
 */

'use strict'

var mongoose = require ('mongoose');
var Schema = mongoose.Schema;


var cartSchema = new Schema({
    id: {
        type: String,
        required: 'require id'
    },
    name: {
        type: String,
        required: 'require user'
    },
    number: {
        type: String,
        required: 'require user'
    },
    cart: {
        type: String,
        required: 'require email'
    }
});

module.exports = mongoose.model('Cart', cartSchema);