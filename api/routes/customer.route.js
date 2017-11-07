/**
 * Created by AchalaKavinda on 11/6/2017.
 */


'use strict';

module.exports = function (app) {
  //require customer controller
  var customerController = require ('../controllers/customer.controller');
  var smsController = require ('./../controllers/sms.controller')
    //customer routes
    app.route('/api/customer')
        .get(customerController.getAllCustomer)
        .post(customerController.addCustomer);
    app.route('/sms/send').get(
        smsController.sendMessage
    );
};