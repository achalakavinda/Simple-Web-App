/**
 * Created by AchalaKavinda on 12/16/2017.
 */

'use strict';

var app = angular.module('clientLogin', [], function() {});

app.controller('loginController',function ($scope,$http) {

    $scope.lUser={};
    $scope.rUser={};
    //login function
    $scope.login = function(){
        $http.post('http://www.localhost:3000/api/customer/auth/',{
                    number:$scope.lUser.number,
                    password:$scope.lUser.password

        }).then(function (response) {
            $scope.lUser = response.data;
        }, function (response) {
            $scope.lUser = response.statusText;
        });
    };
//registration function
    $scope.register = function(){
        $http.post('http://www.localhost:3000/api/customer/register',{
            number:$scope.rUser.number,
            password:$scope.rUser.password,
            name:$scope.rUser.name

        }).then(function (response) {
            $scope.rUser = response.data;
        }, function (response) {
            $scope.rUser = response.statusText;
        });
    };

});