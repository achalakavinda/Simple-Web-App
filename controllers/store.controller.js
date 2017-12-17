/**
 * Created by AchalaKavinda on 12/17/2017.
 */

var app = angular.module('storeApp', [], function() {});

app.controller('storeController', function($scope,$http) {
    $scope.items = [];

    $http.post('http://www.localhost:3000/api/food/json',{
        type:'breakfirst'
    }).then(function (response) {
        $scope.items = response.data;
    }, function (response) {
        $scope.items = [];
    });



    //sepetim - my shopping cart
    $scope.myItems = [];
    //sepete ekle - add to cart

    $scope.addItem = function(newItem) {
       $scope.myItems.push(newItem);
        // updatePrice();
    };

    //fiyatı güncelle (totalPrice) - update price
    var updatePrice = function() {
        var totalPrice = 0;
        for( var i = 0; i < $scope.myItems.length; i++ ) {
            totalPrice += ($scope.myItems[i].count) * ($scope.myItems[i].price);
        }

        $scope.totalPrice = totalPrice;
    };

    //sepeti boşalt - empty your cart
    $scope.removeBasket = function() {
        $scope.myItems.splice(0, $scope.myItems.length);
        updatePrice();
    };

});

app.filter('reverse', function() {
    return function(items) {
        var x = items.slice().reverse();
        if( items.length > 1 ) {
            angular.element('#ok tr').css('background','#fff');
            angular.element('#ok tr').filter(':first').css('background','lightyellow');
            setTimeout(function() {
                angular.element('#ok tr') .filter(':first').css('background','#fff');
            }, 500);
        }
        return x;
    };
});