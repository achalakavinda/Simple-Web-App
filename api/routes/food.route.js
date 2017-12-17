/**
 * Created by AchalaKavinda on 11/7/2017.
 */

module.exports =  function (app) {
  var foodController = require('./../controllers/food.controller');

  //food routes
    app.route('/api/food/json').post(foodController.foods);

    app.route('/api/food')
        .get(foodController.getAllFood)
        .post(foodController.addFood);

    app.route('/api/food/:id')
        .get(foodController.viewFood)
        .put(foodController.updateFood)
        .delete(foodController.deleteFood);

};