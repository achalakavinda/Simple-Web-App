/**
 * Created by AchalaKavinda on 12/17/2017.
 */

app.controller('myCtrl', function($scope) {
    $scope.items = [
        {
            id: 1,
            name: 'iPhone 6s',
            price: 2500
        },
        {
            id: 2,
            name: 'television',
            price: 8950
        },
        {
            id: 3,
            name: 'Macbook Pro',
            price: 4000
        },
        {
            id: 4,
            name: 'T-shirt',
            price: 20
        },
        {
            id: 5,
            name: 'C# Book',
            price: 10
        },
        {
            id: 6,
            name: 'Notebook',
            price: 6980
        }
    ];

    //sepetim - my shopping cart
    $scope.myItems = [];
    //sepete ekle - add to cart
    $scope.addItem = function(newItem) {
        if($scope.myItems.length == 0) {
            newItem.count = 1;
            $scope.myItems.push(newItem);
        }else {
            var repeat = false;
            for( var i = 0; i < $scope.myItems.length; i++ ) {if (window.CP.shouldStopExecution(1)){break;}
                if($scope.myItems[i].id == newItem.id) {
                    $scope.myItems[i].count++;
                    repeat = true;
                }
            }
            window.CP.exitedLoop(1);

            if(!repeat) {
                newItem.count = 1;
                $scope.myItems.push(newItem);
            }
        }
        updatePrice();
    };

    //fiyatı güncelle (totalPrice) - update price
    var updatePrice = function() {
        var totalPrice = 0;
        for( var i = 0; i < $scope.myItems.length; i++ ) {if (window.CP.shouldStopExecution(2)){break;}
            totalPrice += ($scope.myItems[i].count) * ($scope.myItems[i].price);
        }
        window.CP.exitedLoop(2);

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