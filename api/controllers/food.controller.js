/**
 * Created by AchalaKavinda on 11/7/2017.
 */

'use strict'

//mongoose
var mongoose = require('mongoose'),
//food model
FoodModel = mongoose.model('Foods'),
foodModelJson = require('../models/food.model.json');

exports.foods = function (req,res){
    switch (req.body.type){
        case 'breakfirst':
            res.json(foodModelJson.breakfirst);
        case 'lunch':
            res.json(foodModelJson.lunch);
        case 'dinner':
            res.json(foodModelJson.dinner);
        default:
            res.json(foodModelJson);
    }

    if(req.body.type==null){
        res.json({ststus:'bad',message:'error request'});
    }
};

exports.getAllFood = function (req,res) {
    FoodModel.find({}, function(err, sucess) {
        if (err)
            res.send(err);
        res.json(sucess);
    });
};

exports.addFood = function (req,res) {
    var raw = FoodModel({name:'food name',price:'1000'});
    raw.save(function (err,succes) {
        if(err)
            res.send(err);
        res.json(succes);
    });
};

exports.viewFood = function (req, res) {
  FoodModel.findById(req.params.id,function (err, succes) {
      if(err)
          res.send(err);
      res.json(succes);
  });
};

exports.updateFood = function (req, res) {
    FoodModel.findOneAndUpdate({_id:req.param.id},
        req.body,
        {new:true},
        function (err,sucees) {
            if(err)
                res.send(err);
            res.send(sucees);
        }
        );
};

exports.deleteFood = function (req, res) {
    FoodModel.remove({
        _id:req.params.id},
        function (err,succes) {
            if(err)
                res.send(err);
            res.json({status:'Ok',msg:'delete successful',sucess:succes});
        })
};