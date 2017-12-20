/**
 * Created by AchalaKavinda on 12/18/2017.
 */

'use strict'

//mongoose
var mongoose = require('mongoose'),
//reservation Model
    ReservationModel = mongoose.model('Reservation');

exports.reservations = function (req,res){
    ReservationModel.find({},function (err,data) {
        if(err) throw err;
        res.json(data);//get reservation data and forward
    })

};

exports.addReservation = function (req,res){

    var reservation = new ReservationModel({
        user:req.body.name,
        email:req.body.email,
        number:req.body.number,
        table:req.body.table,
        guests:req.body.guests,
        dateTime:req.body.datetime
    });
    reservation.save(function (err,done) {
        if (err) console.log(err);
        res.json(done);
    });

};