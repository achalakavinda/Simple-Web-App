/**
 * Created by AchalaKavinda on 11/7/2017.
 */

exports.sendMessage = function (req,res) {
        res.json(sendMsg(req.body));
};

function sendMsg(res) {
    // Twilio Credentials
    const accountSid = 'AC7a469068d6e6ca9a15a4d67c1726fb9d';
    const authToken = 'a22511d65a3e6bba9e14cb28e296e2f6';

// require the Twilio module and create a REST client
    const client = require('twilio')(accountSid, authToken);




    var data ="";

    if(res.type=='reservation'){
        data='This sms for the verification for you table booking on '+res.date+', Table #no:'+res.table+', Guests:'+res.guests;
    }else
        data='This sms for the verification for meal cart verification,total price is '+res.price;

    client.messages
        .create({
            to:res.number,
            from: '+15733843180',
            body: data,
        },function (err,message) {
            console.error(err);
            console.log(message)
        });
    return {status:'ok',message:'sucees'};
}