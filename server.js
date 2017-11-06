/**
 * Created by Achala Kavinda on 10/26/2017.
 */

var express = require('express');


var mql = require('./api/database/databaseConfig');

var  bodyParser = require('body-parser');

app = express();

port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/customerRoute'); //importing route

routes(app); //register the route

//initial app listen port
app.listen(port, err=>{
    if (err) {
        console.error(err);
        return;
    }
    console.log('app listening on port '+port);
});