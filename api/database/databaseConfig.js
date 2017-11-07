/**
 * Created by AchalaKavinda on 11/6/2017.
 * This is initial to get connect with mysql databases
 */

//config mysql
var mysql = require('mysql');
//connection config

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"restaurant"
});

//connection
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

//export sql connection  to module
module.exports = con;