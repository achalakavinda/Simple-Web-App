/**
 * Created by AchalaKavinda on 11/7/2017.
 */

var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var tableSchema = new Schema({
    no:{
        type:String,
        require:'type is required'
    }
});

module.exports = mongoose.model('Table', tableSchema);