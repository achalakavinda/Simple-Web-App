/**
 * Created by AchalaKavinda on 11/6/2017.
 */
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


