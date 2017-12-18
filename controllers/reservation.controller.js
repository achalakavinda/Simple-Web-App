var app = angular.module('reservationApp', [], function() {});

app.controller('reservationController', function($scope,$http) {
        $scope.reservation=[];

        $scope.tables=[];

        $http.get('http://www.localhost:3000/api/table').then(function (res) {
            $scope.tables=res.data.table;
        });

        $scope.book=function () {
           console.log($scope.reservation);
        };
});