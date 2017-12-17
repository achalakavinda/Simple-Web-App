/**
 * Created by AchalaKavinda on 11/7/2017.
 */

var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var tableSchema = new Schema({
    id:{
        type:String,
        require:'type is required'
    },
    price:{
        type:String,
        require:'type is required'
    },
    chairs:{
        type:Number,
        require:'number is required'
    }
});

module.exports = mongoose.model('Table', tableSchema);