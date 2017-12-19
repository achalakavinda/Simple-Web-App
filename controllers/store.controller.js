/**
 * Created by AchalaKavinda on 12/17/2017.
 */

var app = angular.module('storeApp', [], function() {});

app.controller('storeController', function($scope,$http) {
    if(sessionStorage.userToken!=''){

    }else{
        window.location.replace("/login");
    }

    var itemsList=[];


    $scope.items = [];
    getfoods('breakfirst');

    var json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://www.localhost:3000/store",
            "cancel_url": "http://www.localhost:3000/store"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "item",
                    "sku": "item",
                    "price": "1.00",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "1.00"
            },
            "description": "Payment Description."
        }]
    };

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

    };

    $scope.payment =function () {
        $.LoadingOverlay("show");
            $http.post('http://www.localhost:3000/api/payment/gateway/stimulate',{
                number:11,
                amount:$scope.totalPrice,
                cvc:$scope.cvc
            }).then(function (response) {
                console.log(response.data);
               console.log(response.data.status);
                $.LoadingOverlay("hide");
                if( response.data.status!=='ok'){
                    setTimeout(function () {
                        swal("Payment Error", "You has error!", "warning")
                    },700);

                }else{
                    setTimeout(function () {
                    swal("Payment Success!", "You has success!", "success");},700);
                    setTimeout(function () {
                        window.location.replace("/store");
                    },2000);
                }
            }, function (response) {
               alert('errr');
                $.LoadingOverlay("hide");
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