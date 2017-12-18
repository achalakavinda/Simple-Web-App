/**
 * Created by AchalaKavinda on 12/18/2017.
 */

module.exports =  function (app) {
    var cartController = require('./../controllers/cart.controller');
    //reservation routes
    app.route('/api/cart').get(cartController.reservations)
        .post(cartController.addCart);

};