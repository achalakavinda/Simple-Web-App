module.exports =  function (app) {
    var  tableModel = require('./../models/table.model.json');
    //table routes
    app.route('/api/table').get(function (req,res) {
        res.json(tableModel);
    });

};