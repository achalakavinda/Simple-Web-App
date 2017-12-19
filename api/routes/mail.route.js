/**
 * Created by AchalaKavinda on 12/18/2017.
 */

module.exports =  function (app) {
    var mailController = require('./../controllers/mail.controller');
    //table routes
    app.route('/api/mail').post(mailController.sendMail);

};