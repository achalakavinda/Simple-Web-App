/**
 * Created by AchalaKavinda on 12/18/2017.
 */

'use strict'

//mongoose
var mongoose = require('mongoose'),
//cart Model
    CartModel = mongoose.model('Cart');

//view all reservation
exports.reservations = function (req,res){
    CartModel.find({},function (err,data) {
        if(err) throw err;
        res.json(data);//get cart data and forward
    })

};

//add to cart
exports.addCart = function (req,res) {
    var data = new CartModel({id:req.body.id,name:req.body.name,number:req.body.number,cart:req.body.cart});//car model
    data.save(function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};