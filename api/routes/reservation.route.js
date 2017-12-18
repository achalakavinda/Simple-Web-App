/**
 * Created by AchalaKavinda on 12/18/2017.
 */


module.exports =  function (app) {
    var reservationController = require('./../controllers/reservation.controller');
    //reservation routes
    app.route('/api/reservation').get(reservationController.reservations);

};