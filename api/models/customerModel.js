/**
 * Created by AchalaKavinda on 11/6/2017.
 */

var db=require('../database/databaseConfig'); //reference of dbconnection.js

var customer = {

    getAll:function(callback){

        return db.query("Select * from customer",callback);

    },
    getCustomerById:function(id,callback){

        return db.query("select * from customer where id=?",[id],callback);
    },
    addCustomer:function(Task,callback){
        return db.query("Insert into customer values(?,?)",["",Task.number],callback);
    }

};

module.exports = customer;