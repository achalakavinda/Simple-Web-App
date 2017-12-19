/**
 * Created by AchalaKavinda on 12/18/2017.
 */
'use strict';

const  nodemailer = require('nodemailer');//require node mailer

exports.sendMail = function (req,res) {
    nodemailer.createTestAccount((err, account) => {//create user
        var transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: account.user,
                pass: account.pass
            }
        });
        var mailOptions = {//mail option set to specific
            from: 'Luxury Court',
            to:req.body.email,
            subject:req.body.subject,
            text: req.body.body,
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.json({status:'bad',message:error});//send resspond back if error occur
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);

            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            res.json({status:'ok',message:'Email Send successfully'});//send success respond
        });
    });

};