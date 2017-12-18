/**
 * Created by AchalaKavinda on 11/6/2017.
 */


'use strict';

module.exports = function (app) {
  //require customer controller
  var customerController = require ('../controllers/customer.controller');
  var smsController = require ('./../controllers/sms.controller');
  var paypalController = require ('./../controllers/paypal.controller');
    //customer routes
    app.route('/api/customer').get(customerController.getAllCustomer);
  //customer registration route
    app.route('/api/customer/register').post(customerController.registerCustomer);
    //customer auth route
    app.route('/api/customer/auth').post(customerController.authCustomer);

    //sms sending test route
    // app.route('/sms/send').get(
    //     smsController.sendMessage
    // );

    //payment
    app.route('/api/paymet').get(
        paypalController.payment,[]
    );
};