/**
 * Created by AchalaKavinda on 11/7/2017.
 */

exports.sendMessage = function (req,res) {
        sendMsg();
        res.send('okey');
};

function sendMsg() {
    // Twilio Credentials
    const accountSid = 'AC7a469068d6e6ca9a15a4d67c1726fb9d';
    const authToken = 'a22511d65a3e6bba9e14cb28e296e2f6';

// require the Twilio module and create a REST client
    const client = require('twilio')(accountSid, authToken);

    client.messages
        .create({
            to: '+94773584572',
            from: '+15733843180',
            body: 'Sms Validation',
        },function (err,message) {
            console.log(err);
        });
}