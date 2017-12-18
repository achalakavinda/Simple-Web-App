/**
 * Created by AchalaKavinda on 12/17/2017.
 */

var app = angular.module('storeApp', [], function() {});

app.controller('storeController', function($scope,$http) {
    if(sessionStorage.userToken!=''){

    }else{
        window.location.replace("/login");
    }
    $scope.items = [];
    getfoods('breakfirst');

    function getfoods(value) {
        $http.post('http://www.localhost:3000/api/food/json',{
            type:value
        }).then(function (response) {
            $scope.items = response.data;
        }, function (response) {
            $scope.items = [];
        });
    };

    $scope.out = function () {
        sessionStorage.userToken='';
        window.location.replace("/login");
    };



    //sepetim - my shopping cart
    $scope.myItems=[];
    //sepete ekle - add to cart

    $scope.addItem = function(newItem) {
        if(newItem.qty==null){
            newItem.qty=1;
        }
        $scope.myItems.push(newItem);


        // updatePrice();
    };

    $scope.fillFood = function (type) {
        $scope.items = [];
        getfoods(type);
    };

    $scope.buyCart = function () {
      console.log($scope.myItems);
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
            angular.element('#ok tr').css('background','');
            angular.element('#ok tr').filter(':first').css('background','lightyellow');
            setTimeout(function() {
                angular.element('#ok tr') .filter(':first').css('background','');
            }, 500);
        }
        return x;
    };
});