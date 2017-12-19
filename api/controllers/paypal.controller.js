/**
 * Created by AchalaKavinda on 12/18/2017.
 */

var Paypal = require('paypal-rest-sdk');

Paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM',
    'client_secret': 'EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM'
});
exports.payment =function (req,res) {
    Paypal.payment.create(req.body.jsonArray, function (error, payment) {
        if (error) {
            throw error;
        } else {
            console.log("Create Payment Response");
            console.log(payment);
            res.json(payment);
        }
    });
};