/**
 * Created by AchalaKavinda on 11/6/2017.
 */

const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../../config/databse');

//mongoose
var mongoose = require('mongoose'),
//customer model
CustomerModel = mongoose.model('Customers');

//get all customers
exports.getAllCustomer = function(req, res) {
    CustomerModel.find({}, function(err, sucess) {
        if (err)
            res.send(err);
        res.json(sucess);
    });
};

//add new customer
exports.addCustomer = function (req,res) {
    var raw = new CustomerModel({id:'458466877',number:'0773584572'});
        raw.save(function(err, task) {
            if (err)
                res.send(err);
            res.json(task);
        });
};

//register a customer
exports.registerCustomer = function (req,res){
    const number = req.body.number;
    const name = req.body.name;
    const password = req.body.password;

    CustomerModel.find({number:number},function(err,sucess){
        if(err){
            res.send(err);
        }
        if(sucess.length==0){
            var raw = new CustomerModel({number:number,name:name,password:password});
            raw.save(function(err, task) {
                if (err)
                    res.send(err);
                res.json(task);
            });
        }else{
            res.json({ststus:'bad',message:'there is all ready registered customer'});
        }
    });

};

exports.authCustomer = function (req,res){
    var number = req.body.number;
    var password = req.body.password;
    CustomerModel.findOne({number:number,password:password},function(err,user){
        if(err) throw  err;

        if(user){
            const token = jwt.sign({ data: user }, config.secret, {
                expiresIn: 604800 // 1 week
            });
            res.json({
                status:'ok',
                token: 'JWT '+token,
                type:'JWT',
                customer:{
                    id:user.id,
                    name:user.name,
                    number:user.number
                }
            });
        }else{
            res.json({state:'bad',message:'user not found'});
        }
    });
};



