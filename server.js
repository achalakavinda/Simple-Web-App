/**
 * Created by Achala Kavinda on 10/26/2017.
 */

var express = require('express'),
passport= require('passport'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
CustomerModel = require('./api/models/customer.model'),
FoodModel = require('./api/models/food.model'),
TableModel = require('./api/models/table.model'),
RervationsModel = require('./api/models/reservation.model'),
CartModel = require('./api/models/cart.model'),
bodyParser = require('body-parser');

// mongoose instance connection url connection

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/reservationdb',function(err){
    if (err) {
        console.log(err);
        process.exit(1);
    }
});


app.use(bodyParser.urlencoded({ extended: true })); //to get information in html forms
app.use(bodyParser.json());

//start server

//passport middleware
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use('/public', express.static(__dirname +'/public'));
app.use('/modules', express.static(__dirname + '/modules'));
app.use('/controllers', express.static(__dirname + '/controllers'));


var customerRoute = require('./api/routes/customer.route'); //importing customer api route [PATH/api/customer]
var foodRoute = require('./api/routes/food.route') //importing food api route [PATH/api/food]



//send  html Template to specific route
app.route('/').get(function (req,res){
    res.sendfile(__dirname + '/public/index.html');
});
app.route('/login').get(function (req,res){
    res.sendfile(__dirname + '/public/login.html');
});
app.route('/store').get(function (req,res){
    res.sendfile(__dirname + '/public/store.html');
});
app.route('/reservation').get(function (req,res){
    res.sendfile(__dirname + '/public/reservation.html');
});

function checkAuthentication(req,res,next){
    if(req.isAuthenticated()){
        //if user is looged in, req.isAuthenticated() will return true
        next();
    } else{
        res.redirect("/login");
    }
}


customerRoute(app); //register customer api route
foodRoute(app); //register food api route

app.route('/').get(function (req,res) {
    res.json([{status:'Success'}]);
});

app.listen(port, () => {
    console.log('Server is up and running on http://www.localhost:' +port);
});
