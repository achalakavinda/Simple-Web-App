/**
 * Created by AchalaKavinda on 12/18/2017.
 */

module.exports =  function (app) {
    var mailController = require('./../controllers/mail.controller');
    //mail route
    app.route('/api/mail').post(mailController.sendMail);
    //mail dummy route
    app.route('/api/mail/dummy').post(function (req,res) {
        setTimeout(function () {
            res.json({ststus:'ok',message:'successfully send email'});
        },1000);
    });

};