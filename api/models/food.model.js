/**
 * Created by AchalaKavinda on 11/7/2017.
 */

'use strict'

var mongoose = require ('mongoose')
var Schema =  mongoose.Schema;

var foodSchema = new Schema({
    name:{
        type:String,
        require:'require name'
    },
    price:{
        type:Number,
        require:'require price'
    },
    img:{
        type:String,
        default:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Q11707_noun_11637_ccFedericoPanzano_restaurant.svg/2000px-Q11707_noun_11637_ccFedericoPanzano_restaurant.svg.png'
    }
});

module.exports = mongoose.model('Foods',foodSchema);