/**
 * Created by AchalaKavinda on 11/6/2017.
 */

'use strict'

module.exports = function (app) {

  //customer controller
  var customerController = require ('../controllers/customerController');

  //customer routes
    app.route('/customer').
        get(customerController.allCutomers);
};