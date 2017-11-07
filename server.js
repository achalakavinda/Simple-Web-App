/**
 * Created by Achala Kavinda on 10/26/2017.
 */

var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
CustomerModel = require('./api/models/customer.model'),
FoodModel = require('./api/models/food.model'),
bodyParser = require('body-parser');

// mongoose instance connection url connection

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/reservationdb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var customerRoute = require('./api/routes/customer.route'); //importing customer api route
var foodRoute = require('./api/routes/food.route')//importing food api route

customerRoute(app); //register customer api route
foodRoute(app); //register food api route

app.route('/').get(function (req,res) {
    res.json([{status:'Success'}]);
});

app.listen(port);
console.log('Server is up and running on http://www.localhost:' +port);