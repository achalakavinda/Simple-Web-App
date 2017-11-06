/**
 * Created by AchalaKavinda on 11/6/2017.
 */

var customerModel = require ('./../models/customerModel');

exports.allCutomers = function(req, res) {
    customerModel.getAll({}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};