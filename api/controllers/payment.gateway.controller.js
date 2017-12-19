/**
 * Created by AchalaKavinda on 12/18/2017.
 */

//dummy services for the payment accept
exports.payment_accept = function (req,res) {

    //required payment acceptance
    //cvc card number amount
        if(req.body.number||req.body.amount||req.body.cvc){
            res.json({
                status:'ok',//set to okey
                cvc:req.body.cvc,
                amount:req.body.amount,
                number:req.body.number,
                payment:'fail',
                message:'fail'
            });

    }else
        res.json({
            ststus:'bad',
            message:'required body to be accept'
        });

};