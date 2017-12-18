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
        sessionStorage.name='';
        sessionStorage.number='';
        sessionStorage.id='';
        window.location.replace("/login");
    };



    //sepetim - my shopping cart
    $scope.myItems=[];
    //sepete ekle - add to cart

    $scope.addItem = function(newItem) {
        if(newItem.qty==null){
            newItem.qty=1;
        }

        var dublicate = false;
        for( var i = 0; i < $scope.myItems.length; i++ ) {
            if($scope.myItems[i].name==newItem.name){
                dublicate=true;
            }
        }

       if(!dublicate){
           $scope.myItems.push(newItem);
       }
        updatePrice();
    };



    $scope.fillFood = function (type) {
        $scope.items = [];
        getfoods(type);
    };

    $scope.buyCart = function () {
        console.log(sessionStorage.user[0]);
        swal({
                title: sessionStorage.name + " Are you sure?",
                text: "Do you want to continue for the online paypal payment method",
                type: "warning",
                showCancelButton: true,
                confirmButtonClass: "btn-danger",
                confirmButtonText: "Yes",
                closeOnConfirm: false
            },
            function(){
                swal("Done!", "Your imaginary file has been deleted.", "success");
            });
    };

    $scope.orderCart = function () {
        if($scope.myItems.length>0){
            swal({
                    title: "Are you sure?",
                    text: "Do You want to order this now",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Yes",
                    closeOnConfirm: false
                },addSchema);
        }else{
            alert('Empty Cart')
        }


    };

    var addSchema = function () {
        var data ='[';
        for( var i = 0; i < $scope.myItems.length; i++ ) {
            data+='{name:"'+$scope.myItems[i].name+'",img:"'+$scope.myItems[i].img+'",price:"'+$scope.myItems[i].price+'",qty:"'+$scope.myItems[i].qty+'"},';
        }
        data=data+']';
        $http.post('http://www.localhost:3000/api/cart',{
            id:sessionStorage.id,
            name:sessionStorage.name,
            number:sessionStorage.number,
            cart:data
        }).then(function (response) {
            swal("Done!", "You Order placed successfully.", "success");
            setTimeout(function () {
                window.location.replace("/store");
            },1000)
            }, function (response) {
        });
    };

    var updatePrice = function() {//price upadte
        var totalPrice = 0;
        for( var i = 0; i < $scope.myItems.length; i++ ) {
            totalPrice += ($scope.myItems[i].qty) * ($scope.myItems[i].price);//generate total amount
        }
        $scope.totalPrice = totalPrice;
    };

    //remove basket
    $scope.removeBasket = function() {
        $scope.myItems.splice(0, $scope.myItems.length);
        updatePrice();
    };

});