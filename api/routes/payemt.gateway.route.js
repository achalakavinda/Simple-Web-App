/**
 * Created by AchalaKavinda on 12/18/2017.
 */

module.exports =  function (app) {
    var paymentGatewayController = require('./../controllers/payment.gateway.controller');
    //payment gateway dummy route
    app.route('/api/payment/gateway/stimulate').post(paymentGatewayController.payment_accept);
};