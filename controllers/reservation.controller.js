var app = angular.module('reservationApp', [], function() {});

app.controller('reservationController', function($scope,$http) {
        $scope.reservation=[];

        $scope.book=function () {
            alert($scope.reservation);
        };
});