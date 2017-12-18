/**
 * Created by Achala Kavinda on 10/26/2017.
 */

var express = require('express'),
passport= require('passport'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
CustomerModel = require('./api/models/customer.model'),//import customer model
FoodModel = require('./api/models/food.model'),//iomport food model
TableModel = require('./api/models/table.model'),//import table model
RervationsModel = require('./api/models/reservation.model'),//import reservation mode
CartModel = require('./api/models/cart.model'),//import cart model
bodyParser = require('body-parser');//initial body parser

// mongoose instance connection url connection

mongoose.Promise = global.Promise;//connection mongodb
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
require('./config/passport')(passport);//initialize password
app.use(passport.initialize());
app.use(passport.session());

app.use('/public', express.static(__dirname +'/public'));
app.use('/modules', express.static(__dirname + '/modules'));
app.use('/controllers', express.static(__dirname + '/controllers'));


var customerRoute = require('./api/routes/customer.route'); //importing customer api route [PATH/api/customer]
var foodRoute = require('./api/routes/food.route'); //importing food api route [PATH/api/food]
var reservationRoute = require('./api/routes/reservation.route'); //importing reservation api route [PATH/api/reservation]
var cartRoute = require('./api/routes/cart.route') //importing cart api route [PATH/api/cart]
var tableRoute = require('./api/routes/table.route') //importing table api route [PATH/api/cart]



//send  html Template to specific route
app.route('/').get(function (req,res){
    res.sendfile(__dirname + '/public/index.html');//home page
});
app.route('/login').get(function (req,res){
    res.sendfile(__dirname + '/public/login.html');//login page
});
app.route('/store').get(function (req,res){
    res.sendfile(__dirname + '/public/store.html');//store page
});
app.route('/reservation').get(function (req,res){
    res.sendfile(__dirname + '/public/reservation.html');//reservation page
});

function checkAuthentication(req,res,next){//middleware check
    if(req.isAuthenticated()){
        //if user is looged in, req.isAuthenticated() will return true
        next();
    } else{
        res.redirect("/login");
    }
}


customerRoute(app); //register customer api route
foodRoute(app); //register food api route
reservationRoute(app); //reservation api route
cartRoute(app); //cart api route
tableRoute(app); //cart api route

app.route('/').get(function (req,res) {//base route if any are not working
    res.json([{status:'Success'}]);
});

app.listen(port, () => {//socket set to listing state
    console.log('Server is up and running on http://www.localhost:' +port);// server running message
});
